import Head from 'next/head'

const SITE_NAME = 'ぽんブログ'

const Meta = ({ title = '', type = '' }) => {
    const _title = title ? `${title} - ${SITE_NAME}` : SITE_NAME
    const _type = type ? type : 'website'
    return (
        <Head>
            <meta name="og:title" content={_title} />
            <meta property="og:type" content={_type} />
            <title>{_title}</title>
        </Head>
    )
}

export default Meta