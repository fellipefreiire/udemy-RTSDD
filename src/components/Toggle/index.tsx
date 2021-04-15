import { useState } from 'react'

import * as S from './styled'

import { useTheme } from '../../hooks/theme'

import light from '../../styles/themes/light'
import dark from '../../styles/themes/dark'

interface IToggleProps {
  labelLeft: string
  labelRight: string
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight
}): JSX.Element => {
  const [checked, setChecked] = useState(true)
  const { theme, setTheme } = useTheme()

  const handleToggleTheme = () => {
    if (theme.title === 'dark') {
      setTheme(light)
    } else if (theme.title === 'light') {
      setTheme(dark)
    }
    console.log(theme)
    setChecked(!checked)
  }

  return (
    <S.Container>
      <S.ToggleLabel>{labelLeft}</S.ToggleLabel>
      <S.Toggle
        checked={checked}
        onChange={handleToggleTheme}
        uncheckedIcon={false}
        checkedIcon={false}
      />
      <S.ToggleLabel>{labelRight}</S.ToggleLabel>
    </S.Container>
  )
}

export default Toggle
