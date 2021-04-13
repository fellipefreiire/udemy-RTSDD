import { useMemo } from 'react'
import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

import * as S from './styled'

const MainHeader: React.FC = (): JSX.Element => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    return emojis[indice]
  }, [])

  return (
    <>
      <S.Container>
        <Toggle />
        <S.Profile>
          <S.Welcome>Olá, {emoji}</S.Welcome>
          <S.Username>Felipe Freire</S.Username>
        </S.Profile>
      </S.Container>
    </>
  )
}

export default MainHeader
