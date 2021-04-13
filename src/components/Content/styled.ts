import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.dark.colors.white};
  background-color: ${props => props.theme.dark.colors.primary};
  padding: 1.5rem 2rem;
`
