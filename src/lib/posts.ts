import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'
import remarkBreaks from 'remark-breaks'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'
import remarkParse from 'remark-parse'
import rehypeTwitterEmbed from './rehype-twitter-embed'
import rehypeYoutubeEmbed from './rehype-youtube-embed'
import type { Options as RehypeSanitizeOptions } from 'rehype-sanitize'

type MatterResult = {
    content: string
    data: {
        title: string
        published: string
        publishedIndex: number
        tags: string[]
    }
}

type PostType = 'blog' | 'diary'

export type Post = {
    content: string
    slug: string
    type: PostType
    title: string
    published: string
    publishedIndex: number
    tags: string[] | null
    staticFiles: string[]
}

export type ApiResponse = {
    post: Post
}

const markdownHtmlSanitizeSchema: RehypeSanitizeOptions = {
    ...defaultSchema,
    tagNames: [...(defaultSchema.tagNames || []), 'iframe'],
    attributes: {
        ...defaultSchema.attributes,
        a: [
            ['className', 'twitter-embed-permalink', 'youtube-embed-fallback-link'],
            ['aria-hidden', 'true'],
            ...(defaultSchema.attributes?.a || []),
            ['ariaHidden', 'true'],
        ],
        blockquote: [
            ...(defaultSchema.attributes?.blockquote || []),
            ['className', 'twitter-tweet'],
            ['data-twitter-embed', 'true'],
            ['dataTwitterEmbed', 'true'],
        ],
        div: [
            ...(defaultSchema.attributes?.div || []),
            ['className', 'youtube-embed', 'youtube-embed-frame'],
            ['data-youtube-embed', 'true'],
            ['dataYoutubeEmbed', 'true'],
        ],
        iframe: [
            'allow',
            ['allowFullScreen', true],
            ['allowfullscreen', true],
            ['frameBorder', '0'],
            ['frameborder', '0'],
            ['loading', 'lazy'],
            'src',
            'title',
        ],
        p: [...(defaultSchema.attributes?.p || []), ['className', 'youtube-embed-fallback']],
    },
    protocols: {
        ...defaultSchema.protocols,
        src: ['https'],
    },
}

const BLOG_DIRECTORIE = path.join(process.cwd(), 'posts/blog')
const DIARY_DIRECTORIE = path.join(process.cwd(), 'posts/diary')

function readPostsFromDir(dir: string, type: PostType) {
    const allDirents = fs.readdirSync(dir, { withFileTypes: true })

    return allDirents
        .filter(dirent => dirent.isDirectory())
        .map(dirent => {
            const fullPath = path.join(dir, dirent.name, 'index.md')
            const fileContent = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContent)
            const matterResultData = matterResult.data as MatterResult['data']

            let staticFiles: string[]
            try {
                staticFiles = fs.readdirSync(path.join(dir, dirent.name, 'static'))
            } catch {
                staticFiles = []
            }

            return {
                content: matterResult.content,
                slug: dirent.name,
                type,
                ...matterResultData,
                fileName: dirent.name,
                staticFiles: staticFiles,
            }
        })
}

export function getAllPosts() {
    return readPostsFromDir(DIARY_DIRECTORIE, 'diary').concat(
        readPostsFromDir(BLOG_DIRECTORIE, 'blog'),
    )
}

export function getSortedPostsData(type = '') {
    let posts
    switch (type) {
        case 'blog':
            posts = readPostsFromDir(BLOG_DIRECTORIE, 'blog')
            break
        case 'diary':
            posts = readPostsFromDir(DIARY_DIRECTORIE, 'diary')
            break
        default:
            posts = getAllPosts()
            break
    }
    return posts.sort((a, b) => {
        if (a.published < b.published) {
            return 1
        } else if (a.published == b.published && a.publishedIndex < b.publishedIndex) {
            return 1
        } else {
            return -1
        }
    })
}

// slugからpostを取得する
export async function getPostData(slug: string): Promise<Post> {
    const post = getAllPosts().find(post => slug === post.slug) as Post

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkBreaks)
        .use(remarkImages)
        .use(remarkEmoji)
        .use(remarkGfm)
        .use(remark2rehype)
        .use(rehypeTwitterEmbed)
        .use(rehypeYoutubeEmbed)
        .use(rehypeSanitize, markdownHtmlSanitizeSchema)
        .use(rehypeExternalLinks)
        .use(rehypeHighlight)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(post.content)
    const content = processedContent.toString()

    return {
        ...post,
        content,
    }
}
