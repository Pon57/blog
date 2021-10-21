import { InferGetStaticPropsType, GetStaticProps } from 'next'
import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import styles from './index.module.css'
import Meta from '@/components/Meta'

export const getStaticProps: GetStaticProps<{
    posts: ReturnType<typeof getSortedPostsData>
}> = async () => {
    const posts = getSortedPostsData('blog')
    return { props: { posts } }
}

const Index = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Meta />
            <div className={styles.tabs}>
                <ul className={styles.tab}>
                    <li>
                        <Link href="/posts">
                            <a className={styles.tabItem}>全部</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className={`${styles.tabItem} ${styles.selected}`}>ブログ</a>
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
                {posts.map((post, index) => (
                    <article className={styles.article} key={index}>
                        <Link href="/posts/[slug]" as={`/posts/${post.slug}`}>
                            <a>
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
                            </a>
                        </Link>
                    </article>
                ))}
            </div>
        </>
    )
}

export default Index
