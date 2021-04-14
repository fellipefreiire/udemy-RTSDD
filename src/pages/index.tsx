import Head from 'next/head'
import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'

const Homepage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Minha Carteira</title>
      </Head>

      <Layout>{/* <List /> */}</Layout>
    </div>
  )
}

export default Homepage
