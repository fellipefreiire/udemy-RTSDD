import { NextApiRequest, NextApiResponse } from 'next'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { slug }
  } = req

  const info = slug => {
    if (slug === 'entry-balance') {
      return {
        title: 'Entradas',
        lineColor: 'info',
        list: [
          {
            description: 'Salário',
            amount: '1300.52',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-01-10'
          },
          {
            description: 'Freela',
            amount: '150.13',
            type: 'entrada',
            frequency: 'eventual',
            date: '2021-01-17'
          },
          {
            description: 'Salário',
            amount: '2500.23',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-02-10'
          },
          {
            description: 'Freela site',
            amount: '900.23',
            type: 'entrada',
            frequency: 'eventual',
            date: '2021-02-21'
          },
          {
            description: 'Freela app',
            amount: '950.92',
            type: 'entrada',
            frequency: 'eventual',
            date: '2021-02-23'
          },
          {
            description: 'Salário',
            amount: '2500.25',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-03-10'
          },
          {
            description: 'Salário',
            amount: '2500.18',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-04-10'
          },
          {
            description: 'Salário',
            amount: '2500.15',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-05-10'
          },
          {
            description: 'Salário',
            amount: '2500.12',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-06-10'
          },
          {
            description: 'Salário',
            amount: '2500.00',
            type: 'entrada',
            frequency: 'recorrente',
            date: '2021-07-10'
          }
        ]
      }
    } else if (slug === 'exit-balance') {
      return {
        title: 'Saídas',
        lineColor: 'warning',
        list: [
          {
            description: 'Energia elétrica',
            amount: '150.55',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-01-10'
          },
          {
            description: 'Água',
            amount: '75.55',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-01-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-01-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-01-23'
          },
          {
            description: 'Compras do mês',
            amount: '625.78',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-01-23'
          },
          {
            description: 'Lanche',
            amount: '45.70',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-01-23'
          },
          {
            description: 'Blusa',
            amount: '95.70',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-01-23'
          },
          {
            description: 'Energia elétrica',
            amount: '125.55',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-02-10'
          },
          {
            description: 'Água',
            amount: '90.15',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-02-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-02-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-02-23'
          },
          {
            description: 'Compras do mês',
            amount: '540.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-02-25'
          },
          {
            description: 'Parcela do Celular 1/5',
            amount: '150.99',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-02-26'
          },
          {
            description: 'Cinema',
            amount: '45.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-02-23'
          },
          {
            description: 'Energia elétrica',
            amount: '97.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-03-10'
          },
          {
            description: 'Água',
            amount: '100.10',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-03-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-03-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-03-23'
          },
          {
            description: 'Compras do mês',
            amount: '800.50',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-03-17'
          },
          {
            description: 'Parcela do Celular 2/5',
            amount: '150.99',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-03-18'
          },
          {
            description: 'Troca de Oléo do carro',
            amount: '90.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-03-23'
          },
          {
            description: 'Energia elétrica',
            amount: '75.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-04-10'
          },
          {
            description: 'Água',
            amount: '80.33',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-04-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-04-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-04-23'
          },
          {
            description: 'Compras do mês',
            amount: '600.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-04-25'
          },
          {
            description: 'Parcela do Celular 3/5',
            amount: '150.99',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-04-26'
          },
          {
            description: 'Ebook de React Js',
            amount: '85.95',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-04-13'
          },
          {
            description: 'Energia elétrica',
            amount: '125.55',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-05-10'
          },
          {
            description: 'Água',
            amount: '90.15',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-05-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-05-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-05-23'
          },
          {
            description: 'Compras do mês',
            amount: '540.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-05-25'
          },
          {
            description: 'Parcela do Celular 4/5',
            amount: '150.99',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-05-26'
          },
          {
            description: 'Blusa Iron Man',
            amount: '150.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-01-23'
          },
          {
            description: 'Energia elétrica',
            amount: '200.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-06-10'
          },
          {
            description: 'Água',
            amount: '150.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-06-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-06-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-06-23'
          },
          {
            description: 'Compras do mês',
            amount: '559.15',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-06-25'
          },
          {
            description: 'Parcela do Celular 5/5',
            amount: '150.99',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-06-26'
          },
          {
            description: 'Perfume',
            amount: '250.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-06-21'
          },
          {
            description: 'Energia elétrica',
            amount: '250.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-07-10'
          },
          {
            description: 'Água',
            amount: '90.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-07-15'
          },
          {
            description: 'Telefone',
            amount: '99.99',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-07-23'
          },
          {
            description: 'Plano de Saúde',
            amount: '300.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-07-23'
          },
          {
            description: 'Compras do mês',
            amount: '700.00',
            type: 'saída',
            frequency: 'recorrente',
            date: '2021-07-25'
          },
          {
            description: 'Cafeteira',
            amount: '250.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-07-26'
          },
          {
            description: 'Pizza',
            amount: '60.00',
            type: 'saída',
            frequency: 'eventual',
            date: '2021-07-19'
          }
        ]
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
