import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip
} from 'recharts'

import formatCurrency from '../../utils/formatCurrency'

import * as S from './styled'

interface IHistoryBoxProps {
  data: {
    month: string
    amountEntry: number
    amountOutput: number
  }[]
  lineColorAmountEntry: string
  lineColorAmountOutput: string
}

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput
}): JSX.Element => (
  <S.Container>
    <S.Header>
      <S.H2>Histórico de saldo</S.H2>
      <S.LegendWrapper>
        <S.Legend>
          <S.H3 color={lineColorAmountEntry}></S.H3>
          <S.Span>Entradas</S.Span>
        </S.Legend>
        <S.Legend>
          <S.H3 color={lineColorAmountOutput}></S.H3>
          <S.Span>Saídas</S.Span>
        </S.Legend>
      </S.LegendWrapper>
    </S.Header>
    <S.ChartWrapper>
      <ResponsiveContainer>
        <LineChart data={data} margin={{ right: 20, left: 20 }}>
          <CartesianGrid strokeDasharray='3 3' stroke='transparent' />
          <XAxis dataKey='month' stroke='#cecece' />
          <Tooltip formatter={(value: any) => formatCurrency(Number(value))} />
          <Line
            type='monotone'
            dataKey='amountEntry'
            name='Entradas'
            stroke={lineColorAmountEntry}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
          <Line
            type='monotone'
            dataKey='amountOutput'
            name='Saídas'
            stroke={lineColorAmountOutput}
            strokeWidth={5}
            dot={{ r: 5 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </S.ChartWrapper>
  </S.Container>
)

export default HistoryBox
