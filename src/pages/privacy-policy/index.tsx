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
                    <h2>3. Cookieについて</h2>
                    <p>Cookieとは、ユーザーのコンピュータに保存される情報のことで、当サイトの利用状況の分析やサービス向上を目的として利用される場合があります。</p>
                    <h2>4. プライバシーポリシーの変更</h2>
                    <p>当サイトは、法令の改正や運営方針の変更などに伴い、本プライバシーポリシーを改訂することがあります。最新のプライバシーポリシーは常に当サイトに掲載されるものとします。</p>
                    <div className={styles.history}>
                        <p className={styles.historyItem}>
                            <time dateTime="2026-03-04">2026年03月04日</time>
                            <span>Amazonアソシエイト・プログラムの参加終了に伴う改訂</span>
                        </p>
                        <p className={styles.historyItem}>
                            <time dateTime="2025-02-21">2025年02月21日</time>
                            <span>策定</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index
