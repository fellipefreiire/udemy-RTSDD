import { useState } from 'react'

import * as S from './styled'

const Toggle: React.FC = (): JSX.Element => {
  const [checked, setChecked] = useState(true)

  return (
    <>
      <S.Container>
        <S.ToggleLabel>Light</S.ToggleLabel>
        <S.Toggle
          checked={checked}
          onChange={() => setChecked(!checked)}
          uncheckedIcon={false}
          checkedIcon={false}
        />
        <S.ToggleLabel>Dark</S.ToggleLabel>
      </S.Container>
    </>
  )
}

export default Toggle
