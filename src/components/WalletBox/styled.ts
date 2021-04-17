import styled from 'styled-components'

interface IContainerProps {
  color: string
}

export const Container = styled.div<IContainerProps>`
  width: 32.5%;
  height: 40rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 10px;
  padding: 2rem;

  position: relative;
  overflow: hidden;

  > svg {
    opacity: 0.3;
    position: absolute;
    top: -10px;
    right: -30px;
  }

  @media (max-width: 4000px) {
    height: 25rem;
  }

  @media (max-width: 1920px) {
    width: 32%;
    height: 14rem;
    padding: 1rem;
  }

  @media (max-width: 1400px) {
    width: 30.455%;
    height: 10rem;
  }

  @media (max-width: 420px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`

export const H1 = styled.h1`
  font-size: 12rem;
  font-weight: 600;

  @media (max-width: 4000px) {
    font-size: 7rem;
  }

  @media (max-width: 1920px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1400px) {
    font-size: 1.75rem;
  }

  @media (max-width: 770px) {
    word-wrap: break-word;
    font-size: 20px;
  }
`

export const Span = styled.span`
  font-size: 5rem;
  font-weight: 600;

  @media (max-width: 4000px) {
    font-size: 3rem;
  }

  @media (max-width: 1920px) {
    font-size: 1.75rem;
  }

  @media (max-width: 1400px) {
    font-size: 1.25rem;
  }

  @media (max-width: 770px) {
    font-size: 1rem;
  }
`

export const SpanMoney = styled.span`
  @media (max-width: 770px) {
    font-size: 1rem;
  }

  @media (max-width: 420px) {
    font-size: 1.25rem;
  }
`

export const Small = styled.small`
  font-size: 3.5rem;
  position: absolute;
  bottom: 1rem;

  @media (max-width: 4000px) {
    font-size: 2.5rem;
  }

  @media (max-width: 1920px) {
    font-size: 1.5rem;
  }

  @media (max-width: 1400px) {
    font-size: 1rem;
  }

  @media (max-width: 770px) {
    font-size: 10px;
  }

  @media (max-width: 420px) {
    font-size: 1rem;
  }
`
