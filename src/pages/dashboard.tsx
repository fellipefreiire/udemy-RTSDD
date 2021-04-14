import Layout from '../components/Layout'
import Dashboard from '../components/Dashboard'

const DashboardPage: React.FC = (): JSX.Element => {
  const options = [
    { value: 'Rodrigo', label: 'Rodrigo' },
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Ana', label: 'Ana' }
  ]
  return (
    <Layout>
      <Dashboard />
    </Layout>
  )
}

export default DashboardPage
