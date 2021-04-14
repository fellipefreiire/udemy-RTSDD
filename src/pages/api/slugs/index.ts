import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json([
    {
      slug: 'entry-balance'
    },
    {
      slug: 'exit-balance'
    }
  ])
}
