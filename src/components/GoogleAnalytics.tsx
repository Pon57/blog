import Script from 'next/script'

const GoogleAnalytics = () => (
    <>
        <Script
            defer
            src={`https://www.googletagmanager.com/gtag/js?id=G-D8WPT311QD`}
            strategy="afterInteractive"
        />
        <Script id="ga" defer strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-D8WPT311QD');
          `}
        </Script>
    </>
)

export default GoogleAnalytics
