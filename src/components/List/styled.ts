import styled, { css } from 'styled-components'

export const Container = styled.div``

export const Content = styled.div``

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  background: none;
  color: ${({ theme }) => theme.dark.colors.white};
  margin: 0 0.5rem;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
  }

  ${({ className }) =>
    className === 'tag-filter-recurrent' &&
    css`
      &:after {
        content: '';
        display: block;
        width: 3.5rem;
        padding-bottom: 0.25rem;
        margin: 0 auto;
        border-bottom: 10px solid ${({ theme }) => theme.dark.colors.success};
      }
    `}

  ${({ className }) =>
    className === 'tag-filter-eventual' &&
    css`
      &:after {
        content: '';
        display: block;
        width: 3.5rem;
        padding-bottom: 0.25rem;
        margin: 0 auto;
        border-bottom: 10px solid ${({ theme }) => theme.dark.colors.warning};
      }
    `}
`
