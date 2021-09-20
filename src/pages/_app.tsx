import { AppProps } from 'next/app'

import 'minireset.css'
import 'public/styles.css'
import 'highlight.js/styles/github.css'
import styles from './_app.module.css'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <div className={styles.site}>
                <header className={styles.heading}>
                    <Link href="/">
                        <a className={styles.brand}>ぽんブログ</a>
                    </Link>
                </header>
                <div className={styles.content}>
                    <Component {...pageProps} />
                </div>
                <footer className={styles.footer}>
                    © 2021{' '}
                    <Link href="https://twitter.com/pon_dev">
                        <a target="_blank" rel="noreferrer">
                            Pon
                        </a>
                    </Link>
                </footer>
            </div>
        </>
    )
}
