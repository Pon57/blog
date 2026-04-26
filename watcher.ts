// https://www.steveruiz.me/posts/nextjs-refresh-content

import fs from 'fs'
import { WebSocketServer } from 'ws'

const CONTENT_FOLDER = 'posts'
const REFRESH_DEBOUNCE_MS = 300

let refreshTimeout: ReturnType<typeof setTimeout> | undefined

fs.watch(CONTENT_FOLDER, { persistent: true, recursive: true }, async () => {
    if (refreshTimeout) {
        clearTimeout(refreshTimeout)
    }

    refreshTimeout = setTimeout(() => {
        clients.forEach(ws => {
            ws.send('refresh')
        })
    }, REFRESH_DEBOUNCE_MS)
})

const wss = new WebSocketServer({ port: 3201 })

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const clients = new Set<any>()

wss.on('connection', function connection(ws) {
    clients.add(ws)
    ws.on('error', console.error)
    ws.on('close', () => clients.delete(ws))
})
