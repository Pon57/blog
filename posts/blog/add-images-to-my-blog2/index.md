---
title: 'ブログに画像を貼れるようにした〜その後〜'
published: '2022-01-26'
publishedIndex: 0
tags: [TypeScript, Next.js, Blog]
---

[ブログに画像を貼れるようにした](/posts/add-images-to-my-blog) でブログに画像を貼れるようにしたけど、base64 で埋め込んでいたため少し問題があった。  
それを修正したのでこれも書いておく。

## 何が問題だったのか

base64 で埋め込んでいるため、テキストデータの量が画像によって多くなってしまう。
何が問題かと言うと、テキストデータを静的に HTML に入れているので、HTML ファイルの容量が大きくなってしまい、結果ページ読み込みの時間がかかるようになってしまっていた。  
画像ファイルであれば非同期に読み込まれるっぽく、レンダリングをブロックすることがないっぽい。(正確には未指定で decoding=auto らしいから大体の最新ブラウザでは非同期で読み込まれる感じかな？ [\<img\>: 画像埋め込み要素 - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/ja/docs/Web/HTML/Element/img#attr-decoding))

また、`yarn dev` でページを表示する度に容量大きすぎまっせ的な警告が出てしまう。（まあこれは鬱陶しいだけなので良し）

じゃあ `/public` 配下に画像ファイル置いて普通に読み込めばいいじゃん？と思うが、書いてる最中（VSCode 上）や GitHub でプレビューして欲しかった。特に意味はないけどこだわりみたいなもの。  
index.md から画像への相対的な位置が違うので、どっちか（ビルド後の HTML と index.md）をうまくいかせようとするとどっちかが参照できないのであった。

## どう直したか

[画像を base64 で埋め込むやつじゃない感じにできないか考える · Issue #8 · Pon57/blog](https://github.com/Pon57/blog/issues/8)

まず [remarkjs/remark-embed-images](https://github.com/remarkjs/remark-embed-images) から [remarkjs/remark-images](https://github.com/remarkjs/remark-images) に変えた。

そして [Static HTML Export](https://nextjs.org/docs/advanced-features/static-html-export) 時に `/posts/blog/[slug]/static` フォルダにあるファイルを全て `/public/static` にコピーするようにした。
つまり `/public/static/hoge.jpg` みたいなファイルが生える。
同名のファイルがあった場合は後に同じ処理が走った時点で新しいファイルで上書きされそうな気がするけど、そこはまあ運用でカバーする。

```ts
const salvageStaticFiles = (slug: string, staticFiles: string[]) => {
    staticFiles.forEach(staticFile => {
        fs.mkdirSync(path.join(process.cwd(), 'public/posts/static'), { recursive: true })
        fs.copyFileSync(
            path.join(process.cwd(), 'posts/blog', slug, 'static', staticFile),
            path.join(process.cwd(), 'public/posts/static', staticFile),
        )
    })
}
```

こんな感じの関数を作って、これを `getStaticProps` の中で呼ぶようにした。  
`staticFiles` は `/posts/[slug]/index.md` からブログのデータを取ってくるときに一緒に `/posts/[slug]/static` ディレクトリの中を見てファイル名を持ってきてる。  
かなりのゴリ押し。もっといい書き方も普通にありそうだけど、一旦動けばいいでこんな感じにしちゃった。
とりあえず動いたので :yoshi:

`/posts/[slug]/index.md` からみた `static/hoge.jpg` は生成される HTML からみた `static/hoge.jpg` と同じなので、`index.md` 上のプレビューでも表示されるし、出力された HTML でも表示できる。  
変更してみたら確かに読み込みが早くなった気がする。

ファイルを `/public` 配下に書き込んじゃえばいいんじゃんというのはこのブログを見ていて思った。なんでかそれまでは思いつかなかった。  
[Next.js で OpenGraph 画像を自動生成する | so99ynoodles](https://so99ynoodles.com/blog/nextjs-create-og-image-automatically)
