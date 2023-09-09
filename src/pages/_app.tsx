import { AppProps } from 'next/app'

import 'minireset.css'
import 'public/styles.css'
import 'highlight.js/styles/github-dark.css'
import styles from './_app.module.css'
import Link from 'next/link'
import GoogleAnalytics from '@/components/GoogleAnalytics'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
    useEffect(() => {
        document.documentElement.setAttribute('prefix', 'og: http://ogp.me/ns#')
    })
    return (
        <>
            <GoogleAnalytics />
            <div className={styles.site}>
                <header className={styles.heading}>
                    <Link href="/" className={styles.brand}>
                        ぽんブログ
                    </Link>
                </header>
                <div className={styles.content}>
                    <Component {...pageProps} />
                </div>
                <footer className={styles.footer}>
                    © 2021{' '}
                    <Link href="https://twitter.com/pon_dev" target="_blank" rel="noreferrer">
                        Pon
                    </Link>
                </footer>
            </div>
        </>
    )
}
