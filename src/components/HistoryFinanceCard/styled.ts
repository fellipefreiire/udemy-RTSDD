import styled from 'styled-components'

interface ITagProps {
  color: string
}

export const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  list-style: none;
  border-radius: 5px;
  padding: 0.5rem 2rem;
  cursor: pointer;
  transition: all 0.5s;
  margin-bottom: 1rem;
  position: relative;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }
`

export const Tag = styled.div<ITagProps>`
  width: 1rem;
  height: 2rem;
  background-color: ${({ theme, color }) => theme.colors[color]};
  position: absolute;
  left: 0;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Span = styled.span`
  font-size: 20px;
  font-weight: 600;
`

export const Small = styled.small``

export const H3 = styled.h3``
