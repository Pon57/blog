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
                        <Link href="/posts" className={`${styles.tabItem} ${styles.selected}`}>
                            全部
                        </Link>
                    </li>
                    <li>
                        <Link href="/" className={styles.tabItem}>
                            ブログ
                        </Link>
                    </li>
                    <li>
                        <Link href="/diaries" className={styles.tabItem}>
                            日記
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                {posts.map((post, index) => (
                    <article className={styles.article} key={index}>
                        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                            <div>
                                <h1 className={styles.title}>{post.title}</h1>
                                <p className={styles.content}>{post.content.substr(0, 300)}</p>
                                <div className={styles.meta}>
                                    {post.tags && (
                                        <p className={styles.tags}>
                                            {post.tags?.map((tag, index) => (
                                                <span className={styles.tag} key={index}>
                                                    {tag}
                                                </span>
                                            ))}
                                        </p>
                                    )}
                                    <p className={styles.published}>{post.published}</p>
                                </div>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Index
