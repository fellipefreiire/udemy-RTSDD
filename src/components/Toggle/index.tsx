import { useEffect, useState } from 'react'
import { useTheme } from '../../hooks/theme'

import * as S from './styled'

interface IToggleProps {
  labelLeft: string
  labelRight: string
}

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight
}): JSX.Element => {
  const { toggleTheme } = useTheme()
  const [checked, setChecked] = useState(null)

  const handleToggleTheme = () => {
    setChecked(!checked)
    toggleTheme()
  }

  useEffect(() => {
    const toggleSaved = localStorage.getItem('@minha-carteira:toggle')

    toggleSaved ? setChecked(JSON.parse(toggleSaved)) : true
  }, [])

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
