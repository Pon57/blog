import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import rehypeExternalLinks from 'rehype-external-links'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'
import remarkBreaks from 'remark-breaks'
import remarkEmoji from 'remark-emoji'
import remarkGfm from 'remark-gfm'
import remarkImages from 'remark-images'
import remarkParse from 'remark-parse'
import { toVFile } from 'to-vfile'

type MatterResult = {
    content: string
    data: {
        title: string
        published: string
        publishedIndex: number
        tags: string[]
    }
}

export type Post = {
    content: string
    slug: string
    title: string
    published: string
    publishedIndex: number
    tags: string[] | null
    staticFiles: string[]
}

const BLOG_DIRECTORIE = path.join(process.cwd(), 'posts/blog')
const ALL_BLOG_POSTS = (() => {
    const allDirents = fs.readdirSync(BLOG_DIRECTORIE, { withFileTypes: true })

    return allDirents
        .filter(dirent => dirent.isDirectory())
        .map(dirent => {
            const fullPath = path.join(BLOG_DIRECTORIE, dirent.name, 'index.md')
            const fileContent = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContent)
            const matterResultData = matterResult.data as MatterResult['data']

            let staticFiles: string[]
            try {
                staticFiles = fs.readdirSync(path.join(BLOG_DIRECTORIE, dirent.name, 'static'))
            } catch {
                staticFiles = []
            }

            return {
                content: matterResult.content,
                slug: dirent.name,
                ...matterResultData,
                fileName: dirent.name,
                staticFiles: staticFiles,
            }
        })
})()

const DIARY_DIRECTORIE = path.join(process.cwd(), 'posts/diary')
const ALL_DIARY_POSTS = (() => {
    const allDirents = fs.readdirSync(DIARY_DIRECTORIE, { withFileTypes: true })

    return allDirents
        .filter(dirent => dirent.isDirectory())
        .map(dirent => {
            const fullPath = path.join(DIARY_DIRECTORIE, dirent.name, 'index.md')
            const fileContent = fs.readFileSync(fullPath, 'utf8')
            const matterResult = matter(fileContent)
            const matterResultData = matterResult.data as MatterResult['data']

            let staticFiles: string[]
            try {
                staticFiles = fs.readdirSync(path.join(DIARY_DIRECTORIE, dirent.name, 'static'))
            } catch {
                staticFiles = []
            }

            return {
                content: matterResult.content,
                slug: dirent.name,
                ...matterResultData,
                fileName: dirent.name,
                staticFiles: staticFiles,
            }
        })
})()

export const ALL_POSTS = (() => {
    return ALL_DIARY_POSTS.concat(ALL_BLOG_POSTS)
})()

export function getSortedPostsData(type = '') {
    let posts
    switch (type) {
        case 'blog':
            posts = ALL_BLOG_POSTS
            break
        case 'diary':
            posts = ALL_DIARY_POSTS
            break
        default:
            posts = ALL_POSTS
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
    const post = ALL_POSTS.find(post => slug === post.slug) as Post
    const file = toVFile({
        value: post.content,
        path: process.cwd(),
        dirname: path.join(BLOG_DIRECTORIE, post.slug),
    })

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkBreaks)
        .use(remarkImages)
        .use(remarkEmoji)
        .use(remarkGfm)
        .use(remark2rehype)
        .use(rehypeExternalLinks)
        .use(rehypeHighlight)
        .use(rehypeSlug)
        .use(rehypeStringify)
        .process(file)
    const content = processedContent.toString()

    return {
        ...post,
        content,
    }
}
