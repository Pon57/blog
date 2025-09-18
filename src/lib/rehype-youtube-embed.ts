import type { Element, Node, Parent, Properties, Root } from 'hast'

type ParentNode = Root | Element

type YoutubeReference = {
    id: string
    start?: number
}

export default function rehypeYoutubeEmbed() {
    return (tree: Root) => {
        traverse(tree, [])
    }
}

function traverse(node: Node, ancestors: ParentNode[]) {
    if (!isParent(node)) {
        return
    }

    const nextAncestors = ancestors.slice()
    if (isElement(node) || isRoot(node)) {
        nextAncestors.push(node as ParentNode)
    }

    node.children.forEach(child => {
        if (isElement(child) && child.tagName === 'a') {
            handleAnchor(child, node, nextAncestors)
        }
        traverse(child, nextAncestors)
    })
}

function handleAnchor(anchor: Element, parent: Parent, ancestors: ParentNode[]) {
    const href = getHref(anchor.properties)
    if (!href) {
        return
    }

    const youtube = parseYoutubeUrl(href)
    if (!youtube) {
        return
    }

    if (!isElement(parent) || parent.tagName !== 'p') {
        return
    }

    if (!isStandaloneLinkContainer(parent, anchor)) {
        return
    }

    const grandparent = ancestors.length >= 2 ? ancestors[ancestors.length - 2] : null
    if (!grandparent || !isParent(grandparent)) {
        return
    }

    if (isElement(grandparent) && grandparent.tagName === 'li') {
        return
    }

    const siblings = grandparent.children
    const parentIndex = siblings.indexOf(parent)

    if (parentIndex === -1) {
        return
    }

    const embed = createEmbedElement(youtube, href)
    siblings.splice(parentIndex, 1, embed)
}

function parseYoutubeUrl(rawHref: string): YoutubeReference | null {
    const normalized = normalizeYoutubeHref(rawHref)

    let url: URL
    try {
        url = new URL(normalized)
    } catch {
        return null
    }

    const host = url.hostname.toLowerCase()
    const pathname = url.pathname

    if (!/^(www\.|m\.)?youtube\.com$/.test(host) && host !== 'youtu.be') {
        return null
    }

    let id: string | null = null
    if (host === 'youtu.be') {
        const segments = pathname.replace(/^\/+/, '').split('/')
        if (segments[0]) {
            id = segments[0]
        }
    } else if (/^\/watch/.test(pathname)) {
        id = url.searchParams.get('v')
    } else if (/^\/shorts\//.test(pathname)) {
        const segments = pathname.split('/')
        if (segments[2]) {
            id = segments[2]
        }
    } else if (/^\/embed\//.test(pathname)) {
        const segments = pathname.split('/')
        if (segments[2]) {
            id = segments[2]
        }
    } else if (/^\/live\//.test(pathname)) {
        const segments = pathname.split('/')
        if (segments[2]) {
            id = segments[2]
        }
    }

    if (!id) {
        return null
    }

    const start = parseStartTime(url)

    return start !== undefined ? { id, start } : { id }
}

function parseStartTime(url: URL): number | undefined {
    const param = url.searchParams.get('start') ?? url.searchParams.get('t')
    if (!param) {
        return undefined
    }

    const seconds = parseTimeString(param)
    return seconds !== null ? seconds : undefined
}

function parseTimeString(value: string): number | null {
    if (/^\d+$/.test(value)) {
        return Number(value)
    }

    const match = value.match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/i)
    if (!match) {
        return null
    }

    const [, hoursStr, minutesStr, secondsStr] = match

    const hours = hoursStr ? Number(hoursStr) : 0
    const minutes = minutesStr ? Number(minutesStr) : 0
    const seconds = secondsStr ? Number(secondsStr) : 0

    if (!hours && !minutes && !seconds) {
        return null
    }

    return hours * 3600 + minutes * 60 + seconds
}

function normalizeYoutubeHref(href: string): string {
    if (href.startsWith('http://') || href.startsWith('https://')) {
        return href
    }
    if (href.startsWith('//')) {
        return `https:${href}`
    }
    return `https://${href}`
}

function isStandaloneLinkContainer(container: Element, anchor: Element): boolean {
    return container.children.every(child => {
        if (child === anchor) {
            return true
        }
        if (child.type === 'text') {
            return !child.value.trim()
        }
        return false
    })
}

function createEmbedElement(reference: YoutubeReference, href: string): Element {
    const params = new URLSearchParams({ rel: '0' })
    if (typeof reference.start === 'number' && !Number.isNaN(reference.start)) {
        params.set('start', String(reference.start))
    }

    const src = `https://www.youtube-nocookie.com/embed/${reference.id}${params.size ? `?${params.toString()}` : ''}`

    const iframe: Element = {
        type: 'element',
        tagName: 'iframe',
        properties: {
            src,
            title: 'YouTube video player',
            frameborder: '0',
            allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
            allowfullscreen: true,
            loading: 'lazy',
        },
        children: [],
    }

    const fallbackLink: Element = {
        type: 'element',
        tagName: 'a',
        properties: {
            href,
            target: '_blank',
            rel: 'noopener noreferrer',
            className: ['youtube-embed-fallback-link'],
        },
        children: [
            {
                type: 'text',
                value: 'Watch on YouTube',
            },
        ],
    }

    const fallbackParagraph: Element = {
        type: 'element',
        tagName: 'p',
        properties: {
            className: ['youtube-embed-fallback'],
        },
        children: [fallbackLink],
    }

    const frameWrapper: Element = {
        type: 'element',
        tagName: 'div',
        properties: {
            className: ['youtube-embed-frame'],
        },
        children: [iframe],
    }

    return {
        type: 'element',
        tagName: 'div',
        properties: {
            className: ['youtube-embed'],
            'data-youtube-embed': 'true',
        },
        children: [frameWrapper, fallbackParagraph],
    }
}

function getHref(properties: Properties | undefined): string | undefined {
    if (!properties) {
        return undefined
    }
    const { href } = properties
    if (typeof href === 'string') {
        return href
    }
    if (Array.isArray(href) && href.length > 0) {
        return String(href[0])
    }
    return undefined
}

function isParent(node: Node): node is Parent {
    return Array.isArray((node as Parent).children)
}

function isElement(node: Node | Parent | null | undefined): node is Element {
    return (node as Element).type === 'element'
}

function isRoot(node: Node | Parent | null | undefined): node is Root {
    return (node as Root)?.type === 'root'
}
