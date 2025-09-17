import type { Element, Node, Parent, Properties, Root } from 'hast'

type ParentNode = Root | Element

const TWEET_STATUS_REGEX = /^(https?:)?\/\/(www\.)?(twitter|x)\.com\/[A-Za-z0-9_]+\/status\/(\d+)/i

export default function rehypeTwitterEmbed() {
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
    if (!href || !TWEET_STATUS_REGEX.test(href)) {
        return
    }

    const blockquote = findNearestBlockquote(ancestors)

    if (blockquote) {
        markAsTweet(blockquote)
        ensurePermalinkAnchor(blockquote, href)
        return
    }

    if (!isElement(parent) || parent.tagName !== 'p') {
        return
    }

    const grandparent = ancestors.length >= 2 ? ancestors[ancestors.length - 2] : null
    if (!grandparent || !isParent(grandparent)) {
        return
    }

    const siblings = grandparent.children
    const parentIndex = siblings.indexOf(parent)

    if (parentIndex === -1) {
        return
    }

    const tweetBlockquote: Element = {
        type: 'element',
        tagName: 'blockquote',
        properties: {
            className: ['twitter-tweet'],
            'data-twitter-embed': 'true',
        },
        children: [parent],
    }

    ensurePermalinkAnchor(tweetBlockquote, href)

    siblings.splice(parentIndex, 1, tweetBlockquote)
}

function findNearestBlockquote(ancestors: ParentNode[]): Element | null {
    for (let i = ancestors.length - 1; i >= 0; i--) {
        const node = ancestors[i]
        if (isElement(node) && node.tagName === 'blockquote') {
            return node
        }
    }
    return null
}

function ensurePermalinkAnchor(blockquote: Element, href: string) {
    let existing: Element | undefined
    for (const child of blockquote.children) {
        if (!isElement(child) || child.tagName !== 'a') {
            continue
        }
        const childHref = getHref(child.properties)
        if (typeof childHref === 'string' && normalizeUrl(childHref) === normalizeUrl(href)) {
            existing = child
            break
        }
    }

    if (existing) {
        existing.properties = existing.properties ?? {}
        existing.properties.className = mergeClassNames(existing.properties.className, 'twitter-embed-permalink')
        existing.properties['aria-hidden'] = 'true'
        existing.properties.tabIndex = -1
        return
    }

    const permalink: Element = {
        type: 'element',
        tagName: 'a',
        properties: {
            href,
            className: ['twitter-embed-permalink'],
            'aria-hidden': 'true',
            tabIndex: -1,
        },
        children: [
            {
                type: 'text',
                value: 'View on X',
            },
        ],
    }

    blockquote.children.push(permalink)
}

function markAsTweet(blockquote: Element) {
    blockquote.properties = blockquote.properties ?? {}
    blockquote.properties.className = mergeClassNames(blockquote.properties.className, 'twitter-tweet')
    blockquote.properties['data-twitter-embed'] = 'true'
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

function normalizeUrl(url: string): string {
    return url.replace(/\/$/, '')
}

function mergeClassNames(current: Properties['className'], className: string): string[] {
    const normalized = new Set<string>()

    if (typeof current === 'string') {
        current
            .split(/\s+/)
            .filter(Boolean)
            .forEach(token => normalized.add(token))
    } else if (Array.isArray(current)) {
        current.filter(token => typeof token === 'string').forEach(token => normalized.add(token))
    }

    normalized.add(className)

    return Array.from(normalized)
}

function isParent(node: Node): node is Parent {
    return Array.isArray((node as Parent).children)
}

function isElement(node: Node | Parent | Element | null | undefined): node is Element {
    return (node as Element).type === 'element'
}

function isRoot(node: Node | Parent | null | undefined): node is Root {
    return (node as Root)?.type === 'root'
}
