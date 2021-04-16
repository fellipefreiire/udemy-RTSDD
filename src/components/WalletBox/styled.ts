import styled from 'styled-components'

interface IContainerProps {
  color: string
}

export const Container = styled.div<IContainerProps>`
  width: 30.455%;
  height: 10rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  border-radius: 10px;
  padding: 16px;

  position: relative;
  overflow: hidden;

  > svg {
    opacity: 0.3;
    position: absolute;
    top: -10px;
    right: -30px;
  }
`

export const H1 = styled.h1`
  font-size: 1.75rem;
  font-weight: 600;
`

export const Span = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
`

export const Small = styled.small`
  /* font-size: 11px; */
  font-size: 1rem;
  position: absolute;
  bottom: 1rem;
`
