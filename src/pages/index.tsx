import Head from 'next/head'
import Layout from '../components/Layout'
import SignIn from '../components/SignIn'

const Homepage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Minha Carteira</title>
      </Head>
      {/* <Layout> */}
      <SignIn />
      {/* </Layout> */}
    </div>
  )
}

export default Homepage
