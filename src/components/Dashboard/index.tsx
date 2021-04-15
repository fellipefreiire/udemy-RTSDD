import { useState, useMemo } from 'react'
import * as S from './styled'

import SelectInput from '../SelectInput'
import ContentHeader from '../ContentHeader'
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
      const year = date.getFullYear()

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
    <>
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
      </S.Container>
    </>
  )
}

export default Dashboard
