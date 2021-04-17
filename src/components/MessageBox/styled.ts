import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  50%{
    opacity: 0.3;
  }
  100%{
    transform: translateX(0px);
    opacity: 1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 49%;
  height: 60.25rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  padding: 3rem 2rem;
  margin-top: 2rem;

  animation: ${animate} 0.5s;

  @media (max-width: 4000px) {
    height: 45.25rem;
  }

  @media (max-width: 1920px) {
    width: 48.5%;
    height: 25.25rem;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 1400px) {
    width: 46.293%;
    height: 16.25rem;
  }

  @media (max-width: 770px) {
    width: 100%;
  }
`

export const Header = styled.header``
export const H1 = styled.h1`
  font-size: 9rem;
  img {
    margin-left: 0.5rem;
    width: 9rem;
  }

  @media (max-width: 4000px) {
    font-size: 6rem;
    img {
      width: 6rem;
    }
  }

  @media (max-width: 1920px) {
    font-size: 3rem;
    img {
      width: 3rem;
    }
  }

  @media (max-width: 1400px) {
    font-size: 2rem;
    img {
      width: 2rem;
    }
  }

  @media (max-width: 420px) {
    font-size: 24px;

    img {
      width: 20px;
    }
  }
`
export const P = styled.p`
  font-size: 8.25rem;
  font-weight: 600;

  @media (max-width: 4000px) {
    font-size: 5.5rem;
  }

  @media (max-width: 1920px) {
    font-size: 2.75rem;
  }

  @media (max-width: 1400px) {
    font-size: 1.75rem;
  }

  @media (max-width: 420px) {
    font-size: 22px;
  }
`
export const Footer = styled.footer``
export const Span = styled.span`
  font-size: 4.5rem;

  @media (max-width: 4000px) {
    font-size: 3rem;
  }

  @media (max-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1400px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    font-size: 14px;
  }
`
