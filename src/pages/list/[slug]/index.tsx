// import { GetStaticPaths, GetStaticProps } from 'next'
// import Layout from '../../../components/Layout'
// import List from '../../../components/List'
// import SignIn from '../../../components/SignIn'
// import { useAuth } from '../../../hooks/auth'

// interface ISlugPageProps {
//   type: {
//     title: string
//     lineColor: string
//     list: {
//       description: string
//       amount: string
//       type: string
//       frequency: string
//       date: string
//     }[]
//   }
// }

const SlugPage: React.FC = (): JSX.Element => {
  return <div>olá</div>
}
// const SlugPage: React.FC<ISlugPageProps> = ({ type }): JSX.Element => {
//   const { logged } = useAuth()

//   return (
//       {logged ? (
//         <Layout>
//           <List
//             title={type.title}
//             lineColor={type.lineColor}
//             list={type.list}
//           />
//         </Layout>
//       ) : (
//         <SignIn />
//       )}
//   )
// }

// export default SlugPage

// export const getStaticProps: GetStaticProps = async context => {
//   const { slug } = context.params

//   const res = await fetch(`http://localhost:3000/api/slugs/${slug}`)
//   const data = await res.json()

//   return {
//     props: { type: data }
//   }
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const res = await fetch(`http://localhost:3000/api/slugs`)
//   const data = await res.json()

//   const paths = data.map(page => {
//     return { params: { slug: page.slug } }
//   })

//   return {
//     paths,
//     fallback: false
//   }
// }

export default SlugPage
