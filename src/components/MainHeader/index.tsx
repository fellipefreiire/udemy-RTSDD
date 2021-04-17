import { useEffect, useState } from 'react'
import emojis from '../../utils/emojis'

import * as S from './styled'

const MainHeader: React.FC = (): JSX.Element => {
  const [emoji, setEmoji] = useState('')

  useEffect(() => {
    const indice = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[indice])
  }, [])

  return (
    <S.Container>
      <S.ToggleComponent labelLeft='Light' labelRight='Dark' />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.Username>Felipe Freire</S.Username>
      </S.Profile>
    </S.Container>
  )
}

export default MainHeader
