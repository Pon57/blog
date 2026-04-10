// https://www.steveruiz.me/posts/nextjs-refresh-content

'use client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let AutoRefresh = ({ children }: { children: any }) => children

if (process.env.NODE_ENV === 'development') {
    AutoRefresh = ({ children }) => {
        const router = useRouter()

        useEffect(() => {
            const ws = new WebSocket('ws://localhost:3201')
            ws.onmessage = event => {
                if (event.data === 'refresh') {
                    setTimeout(async () => {
                        await router.replace(router.asPath, undefined, { scroll: false })
                        const twttr = (window as typeof window & { twttr?: { widgets?: { load?: () => void } } }).twttr
                        twttr?.widgets?.load?.()
                    }, 500)
                }
            }
            return () => {
                ws.close()
            }
        }, [router])
        return children
    }
}

export default AutoRefresh
