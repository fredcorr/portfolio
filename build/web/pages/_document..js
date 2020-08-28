import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <meta property="og:type" content='website'/>
          <meta name="robots" content='index, noarchive'/>
          <meta name="author" content="Federico Corradi"></meta>
          <link rel="preload" href="/fonts/Altero-Regular.woff" as="font" crossOrigin=""/>
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