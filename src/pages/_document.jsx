import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const GTM_ID = publicRuntimeConfig.NEXT_PUBLIC_GTM_ID;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => materialSheets.collect(<App {...props} />)
    });
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {materialSheets.getStyleElement()}
        </>
      )
    };
  }

  render() {
    return (
      <Html lang='pt-br'>
        <Head>
          {GTM_ID && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${GTM_ID}');`
              }}
            />
          )}
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          {GTM_ID && (
            <noscript
              dangerouslySetInnerHTML={{
                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`
              }}
            />
          )}
          <NextScript />
        </body>
      </Html>
    );
  }
}
