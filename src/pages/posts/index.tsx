import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import styles from '../index.module.css'
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
            <Meta title="全ての投稿" />
            <div className={styles.tabs}>
                <ul className={styles.tab}>
                    <li>
                        <Link href="/posts">
                            <a className={`${styles.tabItem} ${styles.selected}`}>全部</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={styles.tabItem}>ブログ</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/diaries">
                            <a className={styles.tabItem}>日記</a>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                {posts.map(post => (
                    <article key={post.slug} className={styles.article}>
                        <Link href="./posts/[slug]" as={`./posts/${post.slug}`}>
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
