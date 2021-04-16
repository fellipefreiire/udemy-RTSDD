import CountUp from 'react-countup'

import * as S from './styled'

import Dollar from '../../assets/dollar.svg'
import ArrowUp from '../../assets/arrow-up.svg'
import ArrowDown from '../../assets/arrow-down.svg'

interface IWalletProps {
  title: string
  amount: number
  footerLabel: string
  icon: 'dollar' | 'arrowUp' | 'arrowDown'
  color: string
}

const WalletBox: React.FC<IWalletProps> = ({
  title,
  amount,
  footerLabel,
  icon,
  color
}): JSX.Element => {
  const Icon =
    icon === 'dollar' ? Dollar : icon === 'arrowUp' ? ArrowUp : ArrowDown

  return (
    <S.Container color={color}>
      <S.Span>{title}</S.Span>
      <S.H1>
        <CountUp
          end={amount}
          prefix='R$ '
          separator='.'
          decimal=','
          decimals={2}
        />
      </S.H1>
      <S.Small>{footerLabel}</S.Small>
      <Icon />
    </S.Container>
  )
}

export default WalletBox
