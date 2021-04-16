import styled from 'styled-components'

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
`

export const LeftSide = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  height: 100%;
`

export const RightSide = styled.main`
  display: flex;
  justify-self: center;
  height: 100%;
`

export const LegendWrapper = styled.ul`
  list-style: none;
  width: 9rem;
  overflow-y: scroll;
  justify-self: flex-end;

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
    border-radius: 10px;
  }
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
