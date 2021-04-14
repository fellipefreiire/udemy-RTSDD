import * as S from './styled'

interface IHistoryHinanceCardProps {
  cardColor: string
  tagColor: string
  title: string
  subtitle: string
  amount: string
}

const HistoryFinanceCard: React.FC<IHistoryHinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount
}): JSX.Element => {
  return (
    <S.Wrapper color={cardColor}>
      <S.Tag color={tagColor} />
      <S.Container>
        <S.Span>{title}</S.Span>
        <S.Small>{subtitle}</S.Small>
      </S.Container>
      <S.H3>{amount}</S.H3>
    </S.Wrapper>
  )
}

export default HistoryFinanceCard
