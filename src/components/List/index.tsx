import ContentHeader from '../ContentHeader'
import HistoryFinanceCard from '../HistoryFinanceCard'
import SelectInput from '../SelectInput'
import * as S from './styled'

const List: React.FC = (): JSX.Element => {
  const options = [
    { value: 'Rodrigo', label: 'Rodrigo' },
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Ana', label: 'Ana' }
  ]
  return (
    <S.Container>
      <ContentHeader title='Saídas' lineColor='warning'>
        <SelectInput options={options} />
      </ContentHeader>

      <S.Content>
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
        <HistoryFinanceCard
          tagColor='warning'
          title='Conta de luz'
          subtitle='13/04/2021'
          amount='R$ 130,00'
        />
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
