import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from 'recharts'
import formatCurrency from '../../utils/formatCurrency'

import * as S from './styled'

interface IBarChartBoxProps {
  title: string
  data: {
    name: string
    amount: number
    percent: number
    color: string
  }[]
}

const BarChartBox: React.FC<IBarChartBoxProps> = ({
  title,
  data
}): JSX.Element => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.H2>{title}</S.H2>
        <S.LegendWrapper>
          {data.map((indicator, i) => (
            <S.Legend key={i}>
              <S.H3 color={indicator.color}>{indicator.percent}%</S.H3>
              <S.Span>{indicator.name}</S.Span>
            </S.Legend>
          ))}
        </S.LegendWrapper>
      </S.LeftSide>

      <S.RightSide>
        <ResponsiveContainer>
          <BarChart data={data}>
            <Bar dataKey='amount'>
              {data.map(indicator => (
                <Cell
                  key={indicator.name}
                  cursor='pointer'
                  fill={indicator.color}
                />
              ))}
            </Bar>
            <Tooltip
              formatter={(value: any) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </S.RightSide>
    </S.Container>
  )
}

export default BarChartBox
