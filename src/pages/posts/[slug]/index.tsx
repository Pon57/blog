import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPostData, getAllPostSlugs, Post } from '@/lib/posts'
import styles from './index.module.css'
import Meta from '@/components/Meta'
import { ParsedUrlQuery } from 'node:querystring'

interface Param extends ParsedUrlQuery {
    slug: string
}

export const getStaticPaths: GetStaticPaths<Param> = async () => {
    const slugs = await getAllPostSlugs()
    const paths = slugs.map(slug => {
        return { params: { slug: slug } as Param }
    })

    return {
        paths: paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Post, Param> = async context => {
    const data = await getPostData((context.params || {}).slug as string)
    return { props: data }
}

const PostPage = ({
    title,
    content,
    published,
    tags,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta title={title} type="article" />
            <div className={styles.published}>{published}</div>
            <h1 className={styles.title}>{title}</h1>
            {tags && (
                <p className={styles.tags}>
                    {tags.map((tag, index) => (
                        <span className={styles.tag} key={index}>
                            {tag}
                        </span>
                    ))}
                </p>
            )}
            <div className={styles.content} dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}

export default PostPage
