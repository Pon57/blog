import Link from 'next/link'
import styles from './index.module.css'
import Meta from '@/components/Meta'

const Index = () => {
    return (
        <>
            <Meta title="プライバシーポリシー" />
            {/* prettier-ignore */}
            <div>
                <h1 className={styles.title}>プライバシーポリシー</h1>
                <div className={styles.content}>
                    <h2>1. 個人情報の利用目的</h2>
                    <p>当サイト（https://blog.pon.dev 以下、「当サイト」）では、ユーザーご自身で情報を入力するフォームやコメント欄等を設けておらず、ユーザー個人を特定する情報を取得することはありません。</p>
                    <h2>2. Google アナリティクスの利用</h2>
                    <p>当サイトでは、アクセス解析ツールとして <Link href='https://marketingplatform.google.com/about/analytics/terms/jp/' target='_blank'>Google アナリティクス</Link> を使用しています。Google アナリティクスは、トラフィックデータ収集のために Cookie やモバイルデバイスの広告識別子（Android の広告ID、iOS の広告ID など）といった技術を使用しています。これらの技術により収集されるデータには、個人を特定できる情報（氏名、メールアドレス、電話番号等）は含まれません。</p>
                    <h3>2-1. データの収集・処理について</h3>
                    <p>Google アナリティクスで収集されたデータは、<Link href='https://policies.google.com/privacy?hl=ja' target='_blank'>Google のプライバシーポリシー</Link> に基づいて管理されます。</p>
                    <p>当サイトは、ユーザーの利用状況を把握し、サイトの改善や品質向上を目的として、Google アナリティクスが提供するレポート等を利用しますが、個人を特定できる情報の入手・利用は行いません。</p>
                    <h3>2-2. Google パートナーサイトのデータ使用について</h3>
                    <p><Link href='https://www.google.com/intl/ja/policies/privacy/partners/' target='_blank'>ユーザーが Google パートナーのサイトやアプリを使用する際の Google によるデータ使用</Link> を参照することで、Google が Cookie やデバイス識別情報をどのように利用するかを確認できます。</p>
                    <h2>3. Amazonアソシエイト・プログラムへの参加</h2>
                    <p>当サイトは、Amazon.co.jpを宣伝しリンクすることによってサイトが紹介料を獲得できる手段を提供することを目的に設定されたアフィリエイトプログラムである、Amazonアソシエイト・プログラムの参加者です。</p>
                    <p>Amazonのリンクから商品を購入された場合、当サイト運営者に紹介料が支払われることがあります。</p>
                    <p>商品やサービスに関するお問い合わせは、販売元へ直接ご連絡ください。</p>
                    <h2>4. Cookieについて</h2>
                    <p>Cookieとは、ユーザーのコンピュータに保存される情報のことで、当サイトの利用状況の分析やサービス向上を目的として利用される場合があります。</p>
                    <h2>5. プライバシーポリシーの変更</h2>
                    <p>当サイトは、法令の改正や運営方針の変更などに伴い、本プライバシーポリシーを改訂することがあります。最新のプライバシーポリシーは常に当サイトに掲載されるものとします。</p>
                    <p>2025年02月21日 策定</p>
                </div>
            </div>
        </>
    )
}

export default Index
