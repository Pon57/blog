import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import styles from './index.module.css'
import Meta from '@/components/Meta'

export const getStaticProps: GetStaticProps<{
    posts: ReturnType<typeof getSortedPostsData>
}> = async () => {
    const posts = getSortedPostsData()
    return { props: { posts } }
}

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta />
            <div>
                {posts.map(post => (
                    <article key={post.id} className={styles.article}>
                        <Link href="./posts/[id]" as={`./posts/${post.id}`}>
                            <a>
                                <div>
                                    <h1>{post.title}</h1>
                                    <p className={styles.content}>{post.content}</p>
                                    <p className={styles.published}>{post.published}</p>
                                </div>
                            </a>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Index
