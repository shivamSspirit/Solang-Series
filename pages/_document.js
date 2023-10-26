import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
  <Html>
        <Head>
          {/* Add your stylesheets here */}
          <link rel="stylesheet" href="../dist/output.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
  )
}
