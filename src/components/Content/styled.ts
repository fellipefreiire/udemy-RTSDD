import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.dark.colors.white};
  background-color: ${props => props.theme.dark.colors.primary};
  padding: 1.5rem 2rem;
  height: calc(100vh - 5rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.dark.colors.secondary};
    border-radius: 10px;
    border: 0.5em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.dark.colors.tertiary};
    margin: 120px;
  }
`
