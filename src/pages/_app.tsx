import { AppProps } from 'next/app'

import 'minireset.css'
import styles from './_app.module.css'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <header className={styles.heading}>
                <h1>
                    <Link href="/">
                        <a className={styles.brand}>ぽんブログ</a>
                    </Link>
                </h1>
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
        </>
    )
}
