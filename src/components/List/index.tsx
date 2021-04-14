import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { v4 as uuid_v4 } from 'uuid'

import ContentHeader from '../ContentHeader'
import HistoryFinanceCard from '../HistoryFinanceCard'
import SelectInput from '../SelectInput'
import * as S from './styled'

import formatCurrency from '../../utils/formatCurrency'
import formatDate from '../../utils/formatDate'
import monthsList from '../../utils/months'

interface IListProps {
  title: string
  lineColor: string
  list: {
    description: string
    amount: string
    type: string
    frequency: string
    date: string
  }[]
}

interface IData {
  id: string
  description: string
  amount: string
  date: string
  frequency: string
  tagColor: string
}

const List: React.FC<IListProps> = ({
  title,
  lineColor,
  list
}): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query

  const [data, setData] = useState<IData[]>([])
  const [monthSelected, setMonthSelected] = useState<number>(
    new Date().getMonth() + 1
  )
  const [yearSelected, setYearSelected] = useState<number>(
    new Date().getFullYear()
  )
  const [selectedFrequency, setSelectedFrequency] = useState([
    'recorrente',
    'eventual'
  ])

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

    list.forEach(item => {
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
  }, [list])

  const handleFrequencyClick = (frequency: string) => {
    const alreadySelected = selectedFrequency.findIndex(
      item => item === frequency
    )

    if (alreadySelected >= 0) {
      const filtered = selectedFrequency.filter(item => item !== frequency)
      setSelectedFrequency(filtered)
    } else {
      setSelectedFrequency(prev => [...prev, frequency])
    }
  }

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

  useEffect(() => {
    const filteredData = list.filter(item => {
      const date = new Date(item.date)
      const month = date.getMonth() + 1
      const year = date.getFullYear()

      return (
        month === monthSelected &&
        year === yearSelected &&
        selectedFrequency.includes(item.frequency)
      )
    })

    const formattedData = filteredData.map(item => {
      return {
        id: uuid_v4(),
        description: item.description,
        amount: formatCurrency(Number(item.amount)),
        date: formatDate(item.date),
        frequency: item.frequency,
        tagColor: item.frequency === 'recorrente' ? 'success' : 'warning'
      }
    })
    setData(formattedData)
  }, [slug, list, monthSelected, yearSelected, selectedFrequency])

  return (
    <S.Container>
      <ContentHeader title={title} lineColor={lineColor}>
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

      <S.Filters>
        <S.Button
          onClick={() => handleFrequencyClick('recorrente')}
          selected={selectedFrequency.includes('recorrente') && true}
          buttonType='recorrente'
          type='button'
        >
          Recorrentes
        </S.Button>

        <S.Button
          onClick={() => handleFrequencyClick('eventual')}
          selected={selectedFrequency.includes('eventual') && true}
          buttonType='eventual'
          type='button'
        >
          Eventuais
        </S.Button>
      </S.Filters>

      <S.Content>
        {data.map((item, i) => (
          <HistoryFinanceCard
            key={i}
            tagColor={item.tagColor}
            title={item.description}
            subtitle={item.date}
            amount={item.amount}
          />
        ))}
      </S.Content>
    </S.Container>
  )
}

export default List
