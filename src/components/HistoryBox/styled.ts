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

interface IPercentageProps {
  color: string
}

export const Container = styled.div`
  width: 100%;
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
    height: 25.25rem;
    padding: 1.5rem 1rem;
  }

  @media (max-width: 1400px) {
    height: 16.25rem;
  }

  /* @media (max-width: 770px) {
    height: 40rem;
  } */
`

export const ChartWrapper = styled.div`
  height: calc(100% - 2.5rem);
  width: 100%;
  padding-bottom: 10rem;

  tspan {
    font-size: 2rem;
  }

  @media (max-width: 4000px) {
    padding-bottom: 5rem;
  }

  @media (max-width: 1920px) {
    padding-bottom: 3rem;
    tspan {
      font-size: 1rem;
    }
  }

  @media (max-width: 1400px) {
    padding-bottom: 0rem;
  }

  @media (max-width: 770px) {
    padding-bottom: 3rem;
  }
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 770px) {
    flex-direction: column;
  }
`
export const LegendWrapper = styled.ul`
  list-style: none;
  display: flex;
`
export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const H2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 6.75rem;

  @media (max-width: 4000px) {
    font-size: 4.5rem;
  }

  @media (max-width: 1920px) {
    font-size: 2.25rem;
  }

  @media (max-width: 1400px) {
    font-size: 1.5rem;
  }
`

export const H3 = styled.h3<IPercentageProps>`
  display: block;
  background-color: ${({ color }) => color};
  width: 12.65625rem;
  height: 12.65625rem;
  border-radius: 5px;
  font-size: 5.0625rem;
  line-height: 12.65625rem;
  text-align: center;
  margin-left: 1rem;

  @media (max-width: 4000px) {
    font-size: 3.375rem;
    width: 8.4375rem;
    height: 8.4375rem;
    line-height: 8.4375rem;
  }

  @media (max-width: 1920px) {
    font-size: 2rem;
    width: 5.5rem;
    height: 5.5rem;
    line-height: 5.5rem;
  }

  @media (max-width: 1400px) {
    font-size: 18px;
    width: 45px;
    height: 45px;
    line-height: 45px;
  }
`

export const Span = styled.span`
  font-size: 4.5rem;
  margin-left: 3rem;

  @media (max-width: 4000px) {
    font-size: 3rem;
    margin-left: 1.5rem;
  }

  @media (max-width: 1920px) {
    font-size: 1.5rem;
    margin-left: 0.5rem;
  }

  @media (max-width: 1400px) {
    font-size: 16px;
    margin-left: 0.5rem;
  }
`
