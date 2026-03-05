---
title: 'HHKBのJIS配列をUS配列としていい感じに使う'
published: '2025-02-12'
publishedIndex: 0
tags: [HHKB]
---

※2026/03/05 追記：設定を見直し、簡素化しました。

[HHKB(JIS)をWindowsとMacの両方でいい感じに使う](/posts/hhkb-jis-win-mac) のおまけに書いてある通り今は HHKB の JIS 配列のものを US 配列として使っています。しばらく使っていて結構気に入っているので忘れないように書いておきます。

前提条件として、背面スイッチは全てオフの状態で使っています。  
<https://happyhackingkb.com/jp/products/discontinued/hhkb_backview.html>

## HHKB のキーマップ変更

HHKB は公式でキーマップ変更ツールが用意されているので、それを使って設定します。  
<https://happyhackingkb.com/jp/download/>

JIS 配列の HHKB ではそのままだと US 配列にしても反応しないキーがあり使えなかったりするので、それを変更します。

![keymap-before](./static/hhkb-jis-us-keymap-before.png)

↓

![keymap-after](./static/hhkb-jis-us-keymap-after.png)

Ctrl R と Cmd に関しては [HHKB(JIS)をWindowsとMacの両方でいい感じに使う](/posts/hhkb-jis-win-mac) で設定した通りで変更ありません。こちらは Windows で使わないのであれば気にしなくて良いと思います。

さて、重要なのは右上の `¥` と `|` のキーです。これは US 配列としてそのまま使うと何も反応しません。なので、US で同じ位置にある `` ` `` と `~` を使うために変更します。（本来は BS の位置にありますが、エンターキー周りの配列の影響で一つ左の位置で入力できるようにします。）  
JIS でいうところの特殊ロゴ（記号）キーを設定すると、US 配列では `` ` `` と `~` になります。  
ちなみに、特殊ロゴキーは [公式ヘルプ](https://faq.pfu.jp/faq/show/2643?site_domain=hhkb) によると Windows は 半角/全角、macOS は Caps らしいです。使ってなかったので知らなかった。

そして次に重要なのがスペース横の「無変換」「変換」です。これらは US キーボードとして認識した場合に反応せず、IME のオン/オフが出来なくなってしまいます。「英数」「かな」とすることで IME オン/オフとして使えるようになります。

↑ の左にある Shift R に関しては余っていたので適当に置いています。矢印キーも US にはないのでここら辺も US そのまんまとは少し違いますね。本来の Shift R を Fn にして〜等をすると US に近づくかもしれないですが、今まで JIS で使っていた自分には違和感がすごいのでここは変更していません。

## Windows での設定

Windows で HHKB(JIS) を US として認識させます。  
設定 > 時刻と言語 > 言語と地域 > 日本語の言語のオプション でキーボードのレイアウトを「英語キーボード (101/102 キー)」に変更します。

![win-keyboard-layout](./static/hhkb-jis-us-win-keyboard-layout.png)

## macOS での設定

MacBook についているキーボードも JIS のものを使っていて、HHKB と同じ感じにしたいなーということで Karabiner-Elements を使って **MacBook についているキーボード** の設定を一部変更しています。

まず、Virtual Keyboard で JIS から ANSI に変更しないと JIS として認識されてしまう問題があったので、これを変更しています。

![karabiner-virtual-keyboard](./static/hhkb-jis-us-karabiner-virtual-keyboard.png)

そして、HHKB のキーマップ変更と同様 JIS の `¥` と `|` の場所が使えないので MacBook のキーボードでもそれが使えるように設定します。

- international3 -> grave_accent_and_tilde(`)

![karabiner](./static/hhkb-jis-us-karabiner.png)

HHKB の方は [HHKB(JIS)をWindowsとMacの両方でいい感じに使う](/posts/hhkb-jis-win-mac) で設定した内容と同じなので気にしなくて大丈夫です。

## おわり

これで HHKB の JIS 配列を使っている人がそのままそれを US 配列として使っても違和感なく使える設定ができました。Linux にそのまま繋いでも問題なく使えるかは分からないです。もし試してみたい人は試してみてください。
