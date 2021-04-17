import styled from 'styled-components'

export const Container = styled.div`
  grid-area: AS;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem 2rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-left: 1rem;

  @media (max-width: 770px) {
    font-size: 1.25rem;
  }
`

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`

export const MenuItemLink = styled.a`
  color: ${({ theme }) => theme.colors.info};
  text-decoration: none;
  transition: opacity 0.5s ease;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 2rem;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 1rem;
  }
`

export const MenuItemButton = styled.button`
  color: ${({ theme }) => theme.colors.info};
  border: none;
  background: none;
  text-decoration: none;
  transition: opacity 0.5s ease;
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 1rem;
  margin-left: 2rem;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 1rem;
  }
`
