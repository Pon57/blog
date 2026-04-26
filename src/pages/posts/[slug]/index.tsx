import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import styles from './index.module.css'
import Meta from '@/components/Meta'
import { ParsedUrlQuery } from 'node:querystring'
import fs from 'fs'
import path from 'path'
import { getAllPosts, getPostData, Post } from '@/lib/posts'

interface Param extends ParsedUrlQuery {
    slug: string
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
    const paths = getAllPosts().map(post => {
        return { params: { slug: post.slug } as Param }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

const copyStaticFiles = (post: Post) => {
    const sourceBaseDir = path.join(process.cwd(), 'posts', post.type, post.slug, 'static')
    const destinationBaseDir = path.join(process.cwd(), 'public/posts', post.slug, 'static')

    post.staticFiles.forEach(staticFile => {
        fs.mkdirSync(destinationBaseDir, { recursive: true })
        fs.copyFileSync(
            path.join(sourceBaseDir, staticFile),
            path.join(destinationBaseDir, staticFile),
        )
    })
}

export const getStaticProps: GetStaticProps<Post, Param> = async context => {
    const slug = (context.params || {}).slug as string
    const data = await getPostData(slug)
    copyStaticFiles(data)
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
                    {post.tags.map(tag => (
                        <span className={styles.tag} key={tag}>
                            {tag}
                        </span>
                    ))}
                </p>
            )}
            <div
                className={styles.content}
                // post.content は markdown→HTML 変換済みの自前 build 出力
                // eslint-disable-next-line @eslint-react/dom-no-dangerously-set-innerhtml
                dangerouslySetInnerHTML={{ __html: post.content }}
            />
        </>
    )
}

export default PostPage
