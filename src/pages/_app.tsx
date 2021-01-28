import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import 'react-medium-image-zoom/dist/styles.css'

export default ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
    <Footer />
  </>
)
