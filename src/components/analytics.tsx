export default () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=G-T3S64HDVW3`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-T3S64HDVW3');
            `,
      }}
    />
  </>
)
