import Header from '../../header/index'
import Head from 'next/head'

export default ({ title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
  </>
)
