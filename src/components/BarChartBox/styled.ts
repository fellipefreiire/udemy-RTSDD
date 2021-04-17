import styled, { keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    transform: translateX(100px);
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
  width: 49%;
  height: 60.25rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  display: flex;

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

export const LeftSide = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`

export const RightSide = styled.main`
  width: 100%;
  padding-top: 4rem;
`

export const LegendWrapper = styled.ul`
  list-style: none;
  width: 40rem;
  justify-self: flex-end;

  @media (max-width: 4000px) {
    width: 30rem;
  }

  @media (max-width: 1920px) {
    width: 15rem;
  }

  @media (max-width: 1400px) {
    width: 9rem;
  }
`

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const H2 = styled.h2`
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
