import { useState, useMemo } from 'react'
import * as S from './styled'

import SelectInput from '../SelectInput'
import ContentHeader from '../ContentHeader'
import WalletBox from '../WalletBox'
import MessageBox from '../MessageBox'
import PieChart from '../PieChart'
import HistoryBox from '../HistoryBox'
import BarChartBox from '../BarChartBox'

import monthsList from '../../utils/months'
import expenses from '../../repositories/expenses'
import gains from '../../repositories/gains'
import { useTheme } from '../../hooks/theme'

const Dashboard: React.FC = (): JSX.Element => {
  const { theme } = useTheme()
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )

  const months = useMemo(() => {
    const uniqueMonths: number[] = []

    ;[...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear() + 1

      if (!uniqueMonths.includes(month) && year === yearSelected) {
        uniqueMonths.push(month)
      }
    })

    return uniqueMonths.map((month, i) => {
      return {
        value: month,
        label: monthsList[i]
      }
    })
  }, [yearSelected])

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
        icon: '/grinning.svg'
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
        color: theme.colors.success
      },
      {
        name: 'Saídas',
        value: totalExpenses,
        percent: Number(expensesPercent.toFixed(0)),
        color: theme.colors.warning
      }
    ]

    return data
  }, [yearSelected, monthSelected, totalBalance, theme])

  const historyData = useMemo(() => {
    const uniqueMonths: number[] = []
    const amountEntry: number[] = []
    const amountOutput: number[] = []

    ;[...expenses, ...gains].forEach(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear() + 1

      if (!uniqueMonths.includes(month) && year === yearSelected) {
        uniqueMonths.push(month)
      }
    })

    uniqueMonths.forEach((_, i) => {
      const gainsHelper: number[] = []
      const expensesHelper: number[] = []

      gains.forEach(item => {
        const date = new Date(item.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear() + 1

        if (month === uniqueMonths[i] && year === yearSelected) {
          gainsHelper.push(Number(item.amount))
        }
        amountEntry[i] = gainsHelper.reduce((accumulator, element) => {
          return accumulator + element
        }, 0)
      })

      expenses.forEach(item => {
        const date = new Date(item.date)
        const month = date.getMonth() + 1
        const year = date.getFullYear() + 1

        if (month === uniqueMonths[i] && year === yearSelected) {
          expensesHelper.push(Number(item.amount))
        }
        amountOutput[i] = expensesHelper.reduce((accumulator, element) => {
          return accumulator + element
        }, 0)
      })
    })

    const data = uniqueMonths.map((item, i) => {
      return {
        month: monthsList[i].substr(0, 3),
        amountEntry: amountEntry[i],
        amountOutput: amountOutput[i]
      }
    })

    return data
  }, [yearSelected])

  const relationExpensesRecurrentEventual = useMemo(() => {
    const amountRecurrent: number[] = []
    const amountEventual: number[] = []

    expenses
      .filter(expense => {
        const date = new Date(expense.date)
        const year = date.getFullYear() + 1
        const month = date.getMonth() + 1

        return month === monthSelected && year === yearSelected
      })
      .forEach(expense => {
        if (expense.frequency === 'recorrente') {
          amountRecurrent.push(Number(expense.amount))
        } else if (expense.frequency === 'eventual') {
          amountEventual.push(Number(expense.amount))
        }
      })

    const amountSum = (amountList: number[]): number => {
      const sum = amountList.reduce((accumulator, element) => {
        return accumulator + element
      }, 0)

      return sum
    }

    const total = amountSum(amountRecurrent) + amountSum(amountEventual)

    return [
      {
        name: 'Recorrentes',
        amount: amountSum(amountRecurrent),
        percent: Number(
          ((amountSum(amountRecurrent) / total) * 100).toFixed(0)
        ),
        color: theme.colors.success
      },
      {
        name: 'Eventuais',
        amount: amountSum(amountEventual),
        percent: Number(((amountSum(amountEventual) / total) * 100).toFixed(0)),
        color: theme.colors.warning
      }
    ]
  }, [monthSelected, yearSelected, theme])

  const relationGainsRecurrentEventual = useMemo(() => {
    const amountRecurrent: number[] = []
    const amountEventual: number[] = []

    gains
      .filter(gain => {
        const date = new Date(gain.date)
        const year = date.getFullYear() + 1
        const month = date.getMonth() + 1

        return month === monthSelected && year === yearSelected
      })
      .forEach(gain => {
        if (gain.frequency === 'recorrente') {
          amountRecurrent.push(Number(gain.amount))
        } else if (gain.frequency === 'eventual') {
          amountEventual.push(Number(gain.amount))
        }
      })

    const amountSum = (amountList: number[]): number => {
      const sum = amountList.reduce((accumulator, element) => {
        return accumulator + element
      }, 0)

      return sum
    }

    const total = amountSum(amountRecurrent) + amountSum(amountEventual)

    return [
      {
        name: 'Recorrentes',
        amount: amountSum(amountRecurrent),
        percent: Number(
          ((amountSum(amountRecurrent) / total) * 100).toFixed(0)
        ),
        color: theme.colors.success
      },
      {
        name: 'Eventuais',
        amount: amountSum(amountEventual),
        percent: Number(((amountSum(amountEventual) / total) * 100).toFixed(0)),
        color: theme.colors.warning
      }
    ]
  }, [monthSelected, yearSelected, theme])

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
        <HistoryBox
          data={historyData}
          lineColorAmountEntry={theme.colors.success}
          lineColorAmountOutput={theme.colors.warning}
        />
        <BarChartBox title='Entradas' data={relationGainsRecurrentEventual} />
        <BarChartBox title='Saídas' data={relationExpensesRecurrentEventual} />
      </S.Content>
    </S.Container>
  )
}

export default Dashboard
