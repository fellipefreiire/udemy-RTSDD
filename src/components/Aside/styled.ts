import styled, { css } from 'styled-components'

interface IOpenProps {
  isOpen: boolean
}

export const Container = styled.div<IOpenProps>`
  grid-area: AS;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary};

  border-right: 1px solid ${({ theme }) => theme.colors.gray};
  padding: 1rem 2rem;
  position: relative;

  @media (max-width: 600px) {
    padding-left: 7px;
    position: fixed;
    z-index: 2;

    height: ${({ isOpen }) => (isOpen ? '100vh' : '80px')};
    overflow: hidden;

    ${({ isOpen }) =>
      !isOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
      `}
  }
`

export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-left: 1rem;

  @media (max-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (max-width: 770px) {
    font-size: 1.25rem;
  }

  @media (max-width: 600px) {
    display: none;
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
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 3rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 1rem;
  }

  @media (max-width: 1920px) {
    font-size: 18px;
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
`

export const MenuItemButton = styled.button`
  color: ${({ theme }) => theme.colors.info};
  border: none;
  background: none;
  text-decoration: none;
  transition: opacity 0.5s ease;
  font-size: 2.5rem;
  font-weight: 700;
  margin-left: 3rem;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    margin-right: 1rem;
  }

  @media (max-width: 1920px) {
    font-size: 18px;
    margin-left: 2rem;
  }
`

export const LogoWrapper = styled.div`
  > img {
    width: 70px;
  }

  @media (max-width: 1920px) {
    > img {
      width: 50px;
    }
  }

  @media (max-width: 600px) {
    display: none;
  }
`

export const MenuToggle = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    font-size: 22px;
    background-color: ${({ theme }) => theme.colors.warning};

    transition: opacity 0.3s;

    &:hover {
      opacity: 0.7s;
    }

    > svg {
      width: 2rem;
      height: 2rem;
    }
  }
`

export const ToggleWrapper = styled.div<IOpenProps>`
  display: none;

  @media (max-width: 600px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: absolute;
    bottom: 2rem;
    > img {
      width: 70px;
    }
  }
`
