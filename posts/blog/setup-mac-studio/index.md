---
title: 'Mac Studioを買ったのでセットアップした'
published: '2022-05-04'
publishedIndex: 0
tags: [Mac]
---

せっかく[Mac Studio](https://www.apple.com/jp/mac-studio/)を購入したので、セットアップ周りをメモとして書いとく。ちなみにApple Silicon機は2台目なので初見ではないです。

## ソフトウェア編

### SSH鍵

なんの鍵作っちゃおうかな〜〜と適当に調べていたらEdDSA鍵が出てきたので使うことにしました。
[GitHubで使うSSH鍵を生成 - くたくたじゅうよん](https://scrapbox.io/takker/GitHub%E3%81%A7%E4%BD%BF%E3%81%86SSH%E9%8D%B5%E3%82%92%E7%94%9F%E6%88%90)を見てセットアップ。特にハマリポイントもなくすんなり。  

### ブログ環境構築

[このブログはNext.jsを使って作られている](/posts/create-a-blog)ので、Node.jsの環境が必要。  
Zennの[M1 Macのセットアップ・メモ](https://zenn.dev/catnose99/scraps/e1a2c41e9bf09c)を見てbrewからyarnまでセットアップしました。これも特にハマリポイントはなく、LTSのやつを選択して終わり。  
ちなみにanyenvを前は使っていた気がするけど、なんか遅いらしい（[anyenvが遅いので実行時間を計測して感謝しつつ卒業した - アルパカログ](https://alpacat.com/blog/bye-anyenv)）のでまあとりあえず使わなくていっかってなったので使ってません。  
特に自分で計測とかはしておらず、不満に感じたこともないけど、anyenvがあったことによる恩恵を感じるほど触ったこともないのであった・・・。  
あとは `git clone` して `yarn install` して `yarn dev` で動いていることを確認。

### Androidアプリ開発環境構築

[JetBrains Toolbox App](https://www.jetbrains.com/ja-jp/toolbox-app/)を入れてAndroid Studioをインストールして完了。

### Docker Desktop

昔はPreviewを入れないといけなかったけど、今はそのまま入れるだけでヨシ！  
<https://www.docker.com/get-started/>

### Discord

Apple Silicon対応版はPTBかCanaryしか今のところないので、PTBを入れる。  
<https://discord.com/download>から「公開テスト版ビルドをダウンロード」。

### ESET

効果あるのか知らないけどESETというウイルス対策ソフトをとりあえず入れてます。（たまにこれが原因でローカルのvmへの接続が遮断されるとかがあったりなかったり？）  
日本語版があるけど、同じライセンスを本家の英語版でも使えるので英語版を使ってます。日本語版は本家が何かしらの対応をした後、結構してから降ってくることが多いので。  
Apple Silicon対応した時やOSアップデート時とかにそうすることを決めました。  
英語版はここから。  
<https://www.eset.com/us/download/home/#mac>

### Dropbox

入れるだけだった。今は自動的に判断するよ〜とのこと。[Dropbox による Apple シリコンのネイティブ サポート](https://help.dropbox.com/ja-jp/installs-integrations/apple-silicon-support)

### Box

[M1チップ搭載デバイスでのBox Driveのサポート](https://support.box.com/hc/ja/articles/1500004479962-M1%E3%83%81%E3%83%83%E3%83%97%E6%90%AD%E8%BC%89%E3%83%87%E3%83%90%E3%82%A4%E3%82%B9%E3%81%A7%E3%81%AEBox-Drive%E3%81%AE%E3%82%B5%E3%83%9D%E3%83%BC%E3%83%88)より

> 重要: Box Driveの新しいバージョン (v.2.24.193) をリリースしました。このバージョンは、macOS 11.5以上でサポートされるAppleのFile Provider Extension (FPE) に基づいて構築されており、M1デバイスでのシームレスなアクセスとサポートを提供します。 このBox Driveの新しいバージョンは、こちらからダウンロードしてください。

に従って"こちら"のリンクからダウンロードした。そしたら新しいバージョンのアップデートが降ってきていた。今はパブリックベータが終わっていて公式から安定版入れればそのまま対応版が入ってくれるのかもしれない。試してない。

## ハードウェア編

### Thunderboltドッキングステーション

仕事ではMacBook Proを使っているので、差し替えるだけで良いという環境を作ることを目標にしています。  
今までは[Amazon | Corsair TBT100 Thunderbolt3接続 PD対応](https://amzn.to/39hpVk9)を使っていました。仕事のMacBook Proにこれ1個だけ挿さっていた感じ。  
これがどうやらMac StudioのThunderboltポートではうまく動かない？らしく、モニターの認識がうまくいかなかった。  
具体的には縦置きしているディスプレイは解像度がおかしくアスペクト比がおかしい。もう一つの普通の横モニターは色がおかしいって感じです。これはIntelのMacBook Proでは何も問題なく使えていたので、帯域とか相性みたいなハードの問題？とかなのかな〜と思ってます。  

そこで今は[Amazon | Anker PowerExpand 5-in-1 Thunderbolt 4 Mini Dock ドッキングステーション 85W出力 8K対応 Thunderbolt 4 対応 USB-Cポート USB 3.1 Gen 2 USB-Aポート 搭載](https://amzn.to/3EKniTC)を使ってます。外部ディスプレイへの映像出力は[Amazon | Anker USB-C & HDMI ケーブル (1.8m ブラック)【4K 60Hz対応】MacBook Pro/MacBook Air (2020) / iPad Air 5 / Galaxy S20 / S10+ / S10 / S10e 、その他USB-C機器対応](https://amzn.to/3rTnn2a)を使っていて、USB Type-Aの接続には[Amazon | Transcend 6-in-1 USB 3.1 Gen 2 Type-C ハブ 【microSD(UHS-I),SDカード(UHS-II),Type-C (USB 3.1 Gen 2),Type-C (最大60W Power Delivery*充電専用),Type-A x2 (USB 3.1 Gen 1)】 TS-HUB5C](https://amzn.to/3EPSq4g)を使ってます。

#### 映像出力おまけ

ディスプレイへの出力には今現在はモニターに直接挿していますが、ゲーム周りは[ATEM Mini](https://amzn.to/3FffBoz)で統一されています。これもその仲間に入れたいんですが、ATEM Miniに直接Macから出したHDMIを接続すると色がおかしくなります。「ATEM Mini mac 色」とかで検索するといっぱい出てきます。  
改めて調べ直したところ[【色が変】Macの画面をATEM miniに入力すると画質が変わる問題｜doom｜note](https://note.com/ocdp10ply/n/n7b03157bbcbf)を見つけました。そこに書いてある[Amazon | 【国内正規品】Blackmagic Design コンバーター Micro Converter BiDirect SDI/HDMI 3G](https://amzn.to/3OELUli)を購入してみて間に挟んだところ、自分では気にならないくらいに改善したので最高となりました。

### Magic Trackpad

Mac Studioはデスクトップなので入力関係も用意する必要があります。そして、クラムシェル運用のMacBook Proを利用する際に差し替えるだけで良い環境のためには、入力関係も統一したい感じがあります。  
そこで[Magic Trackpad - ホワイト（Multi-Touch対応）](https://www.apple.com/jp/shop/product/MK2D3ZA/A/magic-trackpad-%E3%83%9B%E3%83%AF%E3%82%A4%E3%83%88multi-touch%E5%AF%BE%E5%BF%9C)を購入しました。  
ちなみにキーボードは[HHKB Hybrid](https://www.pfu.fujitsu.com/direct/hhkb/)を使っていて、これはBluetoothでマルチペアリング対応のため、最初から問題はなし。

Magic Trackpadはマルチペアリングではないので、どれに接続するかはこちら側で何かしらの作業をする必要がありますが、Magic Trackpadは有線で接続すれば自動で接続先を変更してくれるため特に問題はなかったです。  
Thunderboltドッキングステーションからケーブルを伸ばしておいて、接続先変更をするときだけ繋ぐということにすれば問題解決！  
おまけにMagic Trackpadの接続はLightningケーブルを使うため、iOSの開発をしたい時にiPhoneを接続するためのケーブルを用意することもできました。一石二鳥！

## まとめ

今は色々なものがそのまま入れるだけでApple Silicon対応になっていて嬉しみがあるなぁと思いました。  
ハードウェア周りはディスプレイの問題とかもあって結構厳しいな〜となりました。いい感じに解決はできたけど、お金はかかってしまった。まあ動いたのでヨシ！
