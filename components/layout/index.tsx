import Head from 'next/head'
import Header from './header'

export interface LayoutProps {
  pageTitle: string
}

const Layout = (props: LayoutProps & Partial<ChildrenProp>) => {
  return (
    <>
      <Head>
        <title>{props.pageTitle}</title>
      </Head>

      <Header />
      {props.children}
    </>
  )
}

export default Layout
