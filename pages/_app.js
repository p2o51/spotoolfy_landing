import { Montserrat } from 'next/font/google'
import Head from 'next/head';
import '../src/styles/globals.css'
import '../src/styles/subpages.css'
import { appWithTranslation } from 'next-i18next'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Head>
        <title>Spotoolfy</title>
        {/* Remove the old favicon link */}
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/* Keep only the PNG icon link */}
        <link rel="icon" href="/logo.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(MyApp) 