import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172182289-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'UA-172182289-1');
            </script>
            `,
          }}
        />
          <link rel="preload" href="/fonts/Altero-Regular.otf" as="font" crossOrigin=""/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument