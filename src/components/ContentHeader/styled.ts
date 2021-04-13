import styled from 'styled-components'

interface ITitleProps {
  lineColor: string
}

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const TitleWrapper = styled.div``

export const Title = styled.h1<ITitleProps>`
  &::after {
    content: '';
    display: block;
    width: 3.5rem;
    border-bottom: 0.5rem solid
      ${({ theme, lineColor }) => theme.dark.colors[lineColor]};
  }
`

export const Controllers = styled.div`
  display: flex;
`
