import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug }
  } = req

  const info = slug => {
    if (slug === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: 'info'
      }
    } else if (slug === 'exit-balance') {
      return {
        title: 'Saídas',
        lineColor: 'warning'
      }
    }
  }

  const status = slug => {
    if (slug === 'entry-balance' || slug === 'exit-balnce') return 200
    else return 500
  }

  res.status(status(slug)).json(info(slug))

  // res.end(`Post: ${slug}`)
  // res.status(200).json({
  //   title: 'Entradas',
  //   lineColor: 'info'
  // })
  // res.status(200).json(
  //   {
  //     entryBalance: ''
  //   }
  //   [
  //   {
  //     slug: 'entry-balance'
  //   },
  //   {
  //     slug: 'exit-balance'
  //   }
  // ]
  // )
}
