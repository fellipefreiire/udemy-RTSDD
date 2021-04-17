import styled from 'styled-components'
import Toggle from '../Toggle'

export const Container = styled.div`
  grid-area: MH;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem 0 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
`

export const Welcome = styled.h3`
  font-size: 3rem;
  @media (max-width: 1920px) {
    font-size: 18px;
  }
`

export const Username = styled.span`
  font-size: 2.5rem;
  @media (max-width: 1920px) {
    font-size: 16px;
  }
`

export const ToggleComponent = styled(Toggle)`
  @media (max-width: 600px) {
    display: none;
  }
`
