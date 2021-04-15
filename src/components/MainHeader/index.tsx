import { useEffect, useState } from 'react'
import Toggle from '../Toggle'
import emojis from '../../utils/emojis'

import * as S from './styled'

const MainHeader: React.FC = (): JSX.Element => {
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[indice])
  }, [])

  return (
    <>
      <S.Container>
        <Toggle labelLeft='Light' labelRight='Dark' />
        <S.Profile>
          <S.Welcome>Olá, {emoji}</S.Welcome>
          <S.Username>Felipe Freire</S.Username>
        </S.Profile>
      </S.Container>
    </>
  )
}

export default MainHeader
