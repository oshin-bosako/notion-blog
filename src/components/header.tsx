import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Blog', page: '/' },
  { label: 'About', page: '/blog/profile' },
]
{
  /*  { label: 'Contact', page: '/contact' },　
  { label: 'Source Code', link: 'https://github.com/ijjk/notion-blog' }, */
}

const ogImageUrl = 'https://bosako.dev/og-image.jpg'

export default ({ titlePre = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-T3S64HDVW3`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){ window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-T3S64HDVW3}');})`,
          }}
        />
        <title>{titlePre ? `${titlePre} |` : ''} Bosako Lab</title>
        <meta name="description" content="Try everything." />
        <meta name="og:title" content="Bosako Lab" />
        <meta property="og:image" content={ogImageUrl} />
        <meta name="twitter:site" content="@oshinbosako" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}
