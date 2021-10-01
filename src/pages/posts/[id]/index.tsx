import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getPostData, getAllPostIds, Post } from '@/lib/posts'
import styles from './index.module.css'
import Meta from '@/components/Meta'

export const getStaticPaths: GetStaticPaths = async () => {
    const ids = await getAllPostIds()
    return {
        paths: ids.map(id => ({ params: { id } })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps<Post, { id: string }> = async context => {
    const data = await getPostData((context.params || {}).id as string)
    return { props: data }
}

const PostPage = ({
    title,
    content,
    published,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta title={title} type='article' />
            <div className={styles.published}>{published}</div>
            <h1 className={styles.title}>{title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </>
    )
}

export default PostPage
