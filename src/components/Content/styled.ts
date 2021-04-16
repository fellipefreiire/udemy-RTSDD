import styled from 'styled-components'

export const Container = styled.div`
  grid-area: CT;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  padding: 1.5rem 7rem 1.5rem 2rem;
  height: calc(100vh - 5rem);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1.5rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 1rem;
    border: 0.5em solid rgba(0, 0, 0, 0);
    background-clip: padding-box;
  }

  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.tertiary};
    margin: 169px 0 84px;
    border-radius: 10px;
  }
`
