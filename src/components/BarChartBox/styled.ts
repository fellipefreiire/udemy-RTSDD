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
  width: 46.293%;
  height: 16.25rem;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 10px;
  padding: 1.5rem 1rem;
  margin-top: 2rem;
  display: flex;

  animation: ${animate} 0.5s;
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
  width: 9rem;
  justify-self: flex-end;
`

export const Legend = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const H2 = styled.h2`
  font-size: 28px;
`

export const H3 = styled.h3<IPercentageProps>`
  display: block;
  background-color: ${({ color }) => color};
  width: 45px;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  line-height: 45px;
  text-align: center;
`

export const Span = styled.span`
  font-size: 16px;
  margin-left: 0.5rem;
`
