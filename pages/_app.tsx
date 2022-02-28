import 'scss/globals.scss'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default App
