import { NextPage } from 'next'
import Layout, { LayoutProps } from 'comps/layout'

const layoutProps: LayoutProps = {
  pageTitle: 'Akriti - A JavaScript API for 2D Graphics',
}

const Home: NextPage = () => {
  return (
    <>
      <Layout {...layoutProps} />
    </>
  )
}

export default Home
