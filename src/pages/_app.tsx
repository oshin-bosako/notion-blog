import '../styles/global.css'
import 'katex/dist/katex.css'
import Footer from '../components/footer'
import 'react-medium-image-zoom/dist/styles.css'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag.js'

export default ({ Component, pageProps }) => {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = url => {
      if (
        location.host === 'bosako.dev' ||
        'https://notion-blog5.vercel.app/'
      ) {
        gtag.pageview(url)
      }
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
