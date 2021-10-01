import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import rehypeHighlight from 'rehype-highlight'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import remark2rehype from 'remark-rehype'
import remarkBreaks from 'remark-breaks'
import remarkEmoji from 'remark-emoji'
import remarkExternalLinks from 'remark-external-links'
import remarkParse from 'remark-parse'

type MatterResult = {
    content: string
    data: {
        slug: string
        title: string
        published: string
        publishedIndex: number
    }
}

export type Post = {
    content: string
    slug: string
    title: string
    published: string
    publishedIndex: number
}

const POSTS_DIRECTORIES = path.join(process.cwd(), 'posts')
const ALL_POSTS = (() => {
    const fileNames = fs.readdirSync(POSTS_DIRECTORIES)
    return fileNames.map(fileName => {
        const fullPath = path.join(POSTS_DIRECTORIES, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContent)
        const matterResultData = matterResult.data as MatterResult['data']
        return {
            content: matterResult.content,
            ...matterResultData,
            fileName,
        }
    })
})()

const SLUG_FILENAME_MAP = (() => {
    const map = new Map()
    ALL_POSTS.forEach(post => {
        map.set(post.slug, post.fileName.replace(/\.md$/, ''))
    })
    return map
})()

// 全てのpostのslug一覧を取得
export function getAllPostSlugs() {
    return Array.from(SLUG_FILENAME_MAP.keys())
}

export function getSortedPostsData() {
    return ALL_POSTS.sort((a, b) => {
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

    const processedContent = await unified()
        .use(remarkParse)
        .use(remarkEmoji)
        .use(remarkBreaks)
        .use(remarkExternalLinks)
        .use(remark2rehype)
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
