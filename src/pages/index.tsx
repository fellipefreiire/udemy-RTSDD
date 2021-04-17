import Head from 'next/head'
import Dashboard from '../components/Dashboard'
import Layout from '../components/Layout'
import SignIn from '../components/SignIn'
import { useAuth } from '../hooks/auth'

const Homepage: React.FC = () => {
  const { logged } = useAuth()
  return (
    <div>
      <Head>
        <title>Minha Carteira</title>
      </Head>
      {logged ? (
        <Layout>
          <Dashboard />
        </Layout>
      ) : (
        <SignIn />
      )}
    </div>
  )
}

export default Homepage
