module.exports = {
    output: 'export',
    reactStrictMode: true,
    typedRoutes: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
        }
        return config
    },
}

// https://miyaoka.dev/posts/2020-12-31-hmr-on-markdown
const fs = require('fs')
const postLib = `${__dirname}/src/lib/posts.ts`
const content = fs.readFileSync(postLib, 'utf-8')
let isUpdating = false

const onChangePost = () => {
    if (isUpdating) return
    isUpdating = true

    fs.writeFileSync(postLib, `${content}\nconsole.log('updatedAt: ${new Date().toISOString()}')\n`)

    fs.writeFileSync(postLib, content)
    isUpdating = false
}

require('chokidar')
    .watch('./posts', { ignoreInitial: true })
    .on('add', onChangePost)
    .on('change', onChangePost)
