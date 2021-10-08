/* eslint-disable @next/next/no-document-import-in-page */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head >
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon-256x256.png" />
          <link rel="icon" href="/icon-256x256.png" />
          <meta name="theme-color" content="#fff" />
          <meta name="description" content="Info Corona" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
