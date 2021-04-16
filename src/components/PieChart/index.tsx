import * as S from './styled'

import { PieChart as PieChartC, Pie, Cell, ResponsiveContainer } from 'recharts'
interface IPieChartProps {
  data: {
    name: string
    value: number
    percent: number
    color: string
  }[]
}

const PieChart: React.FC<IPieChartProps> = ({ data }): JSX.Element => {
  return (
    <S.Container>
      <S.LeftSide>
        <S.H2>Relação</S.H2>
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
          <PieChartC>
            <Pie data={data} labelLine={false} dataKey='percent'>
              {data.map((indicator, i) => (
                <Cell key={i} fill={indicator.color} />
              ))}
            </Pie>
          </PieChartC>
        </ResponsiveContainer>
      </S.RightSide>
    </S.Container>
  )
}
export default PieChart
