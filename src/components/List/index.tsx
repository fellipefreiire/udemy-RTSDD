import ContentHeader from '../ContentHeader'
import HistoryFinanceCard from '../HistoryFinanceCard'
import SelectInput from '../SelectInput'
import * as S from './styled'

const List: React.FC = (): JSX.Element => {
  const months = [
    { value: 7, label: 'Julho' },
    { value: 8, label: 'Agosto' },
    { value: 9, label: 'Setembro' }
  ]

  const years = [
    { value: 2021, label: 2021 },
    { value: 2020, label: 2020 },
    { value: 2019, label: 2019 }
  ]
  return (
    <S.Container>
      <ContentHeader title='Saídas' lineColor='warning'>
        <SelectInput options={months} />
        <SelectInput options={years} />
      </ContentHeader>

      <S.Filters>
        <S.Button type='button' className='tag-filter-recurrent'>
          Recorrentes
        </S.Button>

        <S.Button type='button' className='tag-filter-eventual'>
          Eventuais
        </S.Button>
      </S.Filters>

      <S.Content>
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
      </S.Content>
    </S.Container>
  )
}

export default List
