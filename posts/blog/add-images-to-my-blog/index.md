---
title: 'ブログに画像を貼れるようにした'
published: '2021-10-14'
publishedIndex: 1
tags: [TypeScript, Next.js, Blog]
---

少しずつ弄ってるブログですが、この度画像を貼れるようにしました。

[![サンプル画像](./james-harrison-vpOeXr5wmR4-unsplash.jpg)](https://unsplash.com/photos/vpOeXr5wmR4)
ｼﾞｬｰﾝ

その時少しハマったので、ログを残しておきます。

# 使おうとしたもの

[remarkjs/remark-embed-images](https://github.com/remarkjs/remark-embed-images)

# やったこと

https://github.com/Pon57/blog/commit/a74e1a337368daa3b692f78a9ae92f9b90b8881e

# 引っかかったところ

`gray-matter` でメタデータを解析したのち、コンテンツの文字列を抜き出して使っていた。

```typescript
const post = ALL_POSTS.find(post => slug === post.slug) as Post

const processedContent = await unified()
    .use(remarkParse)
    .use(remarkEmoji)
    .use(remarkBreaks)
    .use(remarkExternalLinks)
    .use(remark2rehype)
    .use(rehypeHighlight)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(post.content)
```

これにそのまま `.use(remarkEmbedImages)` を忍び込ませ、ブログ本文に画像を入れてみた。
パスは `/posts/[slug]/hoge.png` という感じ。マークダウンファイルのパスはその当時は `/posts/[slug].md`

だけどどうもうまくいかなかったみたい。

> TypeError [ERR_INVALID_ARG_TYPE]: The "path" argument must be of type string. Received type undefined

試しに絶対パスを入れたけど、画像の変換が行われず、固定文字列が入っちゃった。
プロジェクトルートから考えた相対パスを入れれば問題なく動いたけど、マークダウンファイルとの相対的な位置が合わず、プレビューもできないし嫌だな〜ということでボツ。

# 解決のためにやったこと

出ている場所は `remarkEmbedImages` で間違いないが、なんのこっちゃという感じ。

エラーが示していた場所はここ。
https://github.com/remarkjs/remark-embed-images/blob/main/index.js#L27

`path` が関係あるのかと思いきや、`path` の引数が `undefined` の場合もこういうエラーが出るらしい。
VSCode で特に何もせず使えたデバッガーを利用して変数の中身を見てみると、どうやら `file.dirname` が原因だろうというところまでわかった。

じゃあ `file` はなんなの？となるけど、コードを見てもいまいち分からず・・・

なんか検索しているうちに再実装しているリポジトリを見つけた。
https://github.com/ahlec/jyosuushi/blob/0990e7c75c2df7c704acb9bcaca23bf999b3d181/scripts/markdown/parsing/embeded-images.ts

そんなこんなしているうちに `file.dirname` に `posts` という固定文字列を入れてみた。動いた！
この時世界が動き出した。

なんでか覚えてないけど `.process()` には `vfile` を入れることができるということを知り、`vfile` は `dirname` や `path`、`cwd` があり、なんかみたことのあるな〜という感じ。
https://github.com/vfile/vfile

そうか、`remark-embed-images` の `file` は `vfile` のことだったのか・・・となった（どうして `vfile` なのかはまだ分かってない）

```diff
const post = ALL_POSTS.find(post => slug === post.slug) as Post
+ const file = toVFile({ value: post.content, path: process.cwd(), dirname: 'posts' })

const processedContent = await unified()
    .use(remarkParse)
...
    .use(rehypeStringify)
-   .process(post)
+   .process(file)
```

としたら無事動いた :tada:

# おわり

なんで動いたのかとかあんまりよく分かっていないけど、文字列を `.process()` に入れるとファイルの中身だけはあるけど実体は無いみたいな扱いをされて、その結果 `dirname` が `undefined` になっていたとかそんな感じかなぁって思ってる。
そのうち気が向いたら追ってみると思う。

とりあえず動くようになったのでよかった :kissing_closed_eyes: