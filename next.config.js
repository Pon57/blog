module.exports = {
    reactStrictMode: true,
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback.fs = false
        }
        return config
    },
    swcMinify: true,
}

// https://miyaoka.dev/posts/2021-01-09-hmr-on-markdown-2
const fs = require('fs')
const postLib = `${__dirname}/src/pages/api/posts/[slug].tsx`
let isUpdating = false

const onChangePost = () => {
    if (isUpdating) return
    isUpdating = true

    const content = fs.readFileSync(postLib, 'utf-8')
    fs.writeFileSync(postLib, `${content}\nconsole.log('updatedAt: ${new Date().toISOString()}')\n`)

    setTimeout(() => {
        fs.writeFileSync(postLib, content)
        isUpdating = false
    }, 1000)
}

require('chokidar')
    .watch('./posts', { ignoreInitial: true })
    .on('add', onChangePost)
    .on('change', onChangePost)
