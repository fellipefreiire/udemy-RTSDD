import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span``

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.dark.colors.info,
  offColor: theme.dark.colors.warning
}))<ReactSwitchProps>`
  margin: 0 0.5rem;
`
