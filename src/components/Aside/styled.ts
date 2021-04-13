import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  color: ${props => props.theme.dark.colors.white};
  background-color: ${props => props.theme.dark.colors.secondary};

  border-right: 1px solid ${({ theme }) => theme.dark.colors.gray};
`
