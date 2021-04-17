import styled from 'styled-components'
import Switch, { ReactSwitchProps } from 'react-switch'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToggleLabel = styled.span`
  font-size: 2.5rem;
  @media (max-width: 1920px) {
    font-size: 16px;
  }
`

export const Toggle = styled(Switch).attrs<ReactSwitchProps>(({ theme }) => ({
  onColor: theme.colors.info,
  offColor: theme.colors.warning
}))<ReactSwitchProps>`
  margin: 0 1.5rem;

  > div {
    width: 102px;
  }

  @media (max-width: 1920px) {
    width: 56px;
    margin: 0 0.5rem;
  }
`
