import { useState, useMemo } from 'react'
import * as S from './styled'

import SelectInput from '../SelectInput'
import ContentHeader from '../ContentHeader'
import WalletBox from '../WalletBox'
import MessageBox from '../MessageBox'
import PieChart from '../PieChart'

import monthsList from '../../utils/months'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'

const Dashboard: React.FC = (): JSX.Element => {
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )

  const months = useMemo(() => {
    return monthsList.map((month, index) => {
      return {
        value: index + 1,
        label: month
      }
    })
  }, [])

  const years = useMemo(() => {
    let uniqueYears: number[] = []

    ;[...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear() + 1

      if (!uniqueYears.includes(year)) {
        uniqueYears.push(year)
      }
    })

    return uniqueYears.map(year => {
      return {
        value: year,
        label: year
      }
    })
  }, [])

  const totalExpenses = useMemo(() => {
    const total: number[] = []

    expenses.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear() + 1
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total.push(Number(item.amount))
        } catch (error) {
          throw new Error('Invalid amount! Amount must be a number')
        }
      }
    })
    const sum = total.reduce((accumulator, element) => {
      return accumulator + element
    }, 0)
    return sum
  }, [monthSelected, yearSelected])

  const totalGains = useMemo(() => {
    const total: number[] = []

    gains.forEach(item => {
      const date = new Date(item.date)
      const year = date.getFullYear() + 1
      const month = date.getMonth() + 1

      if (month === monthSelected && year === yearSelected) {
        try {
          total.push(Number(item.amount))
        } catch (error) {
          throw new Error('Invalid amount! Amount must be a number')
        }
      }
    })
    const sum = total.reduce((accumulator, element) => {
      return accumulator + element
    }, 0)
    return sum
  }, [monthSelected, yearSelected])

  const totalBalance = useMemo(() => {
    return totalGains - totalExpenses
  }, [totalGains, totalExpenses])

  const message = useMemo(() => {
    if (totalBalance < 0) {
      return {
        title: 'Que triste!',
        description: 'Neste mês, você gastou mais do que deveria',
        footerText:
          'Verifique seus gastos e tente cortar algumas coisas desnecessárias',
        icon: '/sad.svg'
      }
    } else if (totalBalance === 0) {
      return {
        title: 'Ufaa!',
        description: 'Neste mês, você gastou exatamente o que ganhou',
        footerText:
          'Tenha cuidado. No próximo mês tente poupar o seu dinheiro.',
        icon: '/happy.svg'
      }
    } else {
      return {
        title: 'Muito bem!',
        description: 'Sua carteira está positiva!',
        footerText: 'Continue assim. Considere investir seu saldo.',
        icon: '/happy.svg'
      }
    }
  }, [totalBalance])

  const relationExpensesGains = useMemo(() => {
    const total = totalGains + totalExpenses

    const gainsPercent = (totalGains / total) * 100

    const expensesPercent = (totalExpenses / total) * 100

    const data = [
      {
        name: 'Entradas',
        value: totalGains,
        percent: Number(gainsPercent.toFixed(0)),
        color: '#F7931B'
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(0)),
        color: '#E44C4E'
      }
    ]

    return data
  }, [totalBalance])

  const handleMonthSelected = (month: string) => {
    try {
      const parseMonth = Number(month)
      setMonthSelected(parseMonth)
    } catch (error) {
      throw new Error('Invalid month value. Is accepted 0 - 12.')
    }
  }

  const handleYearSelected = (year: string) => {
    try {
      const parseYear = Number(year)
      setYearSelected(parseYear)
    } catch {
      throw new Error('Invalid year value. Is accepted integer numbers only.')
    }
  }

  return (
    <S.Container>
      <ContentHeader title='Dashboard' lineColor='info'>
        <SelectInput
          options={months}
          onChange={e => handleMonthSelected(e.target.value)}
          defaultValue={monthSelected}
        />
        <SelectInput
          options={years}
          onChange={e => handleYearSelected(e.target.value)}
          defaultValue={yearSelected}
        />
      </ContentHeader>
      <S.Content>
        <WalletBox
          title='saldo'
          amount={totalBalance}
          footerLabel='atualizado com base nas entradas e saídas'
          icon='dollar'
          color='info'
        />
        <WalletBox
          title='entrada'
          amount={totalGains}
          footerLabel='atualizado com base nas entradas e saídas'
          icon='arrowUp'
          color='success'
        />
        <WalletBox
          title='saída'
          amount={totalExpenses}
          footerLabel='atualizado com base nas entradas e saídas'
          icon='arrowDown'
          color='warning'
        />
        <MessageBox
          title={message.title}
          description={message.description}
          footerText={message.footerText}
          icon={message.icon}
        />
        <PieChart data={relationExpensesGains} />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
