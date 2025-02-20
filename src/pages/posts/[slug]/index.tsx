import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from './index.module.css'
import Meta from '@/components/Meta'
import { ParsedUrlQuery } from 'node:querystring'
import fs from 'fs'
import path from 'path'
import { ALL_POSTS, getPostData, Post } from '@/lib/posts'

interface Param extends ParsedUrlQuery {
    slug: string
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
    const paths = ALL_POSTS.map(post => {
        return { params: { slug: post.slug } as Param }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

const copyStaticFiles = (slug: string, staticFiles: string[]) => {
    staticFiles.forEach(staticFile => {
        fs.mkdirSync(path.join(process.cwd(), 'public/posts/static'), { recursive: true })
        fs.copyFileSync(
            path.join(process.cwd(), 'posts/blog', slug, 'static', staticFile),
            path.join(process.cwd(), 'public/posts/static', staticFile),
        )
    })
}

export const getStaticProps: GetStaticProps<Post, Param> = async context => {
    const slug = (context.params || {}).slug as string
    const data = await getPostData(slug)
    copyStaticFiles(slug, data.staticFiles)
    return { props: data }
}

const PostPage = (post: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta title={post.title} type="article" />
            <div className={styles.published}>{post.published}</div>
            <h1 className={styles.title}>{post.title}</h1>
            {post.tags && (
                <p className={styles.tags}>
                    {post.tags.map((tag, index) => (
                        <span className={styles.tag} key={index}>
                            {tag}
                        </span>
                    ))}
                </p>
            )}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content }} />
            {/* prettier-ignore */}
            <div className={styles.footer}>※サイト内の商品リンクは一部アフィリエイトリンクとなっています。</div>
        </>
    )
}

export default PostPage
