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

  width: 46.293%;
  height: 16.25rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;

  animation: ${animate} 0.5s;
`

export const Header = styled.header``
export const H1 = styled.h1`
  img {
    margin-left: 0.5rem;
    width: 2rem;
  }
`
export const P = styled.p`
  font-size: 1.75rem;
  font-weight: 600;
`
export const Footer = styled.footer``
export const Span = styled.span``
