import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`

export const TitleWrapper = styled.div``

export const Title = styled.h1`
  &::after {
    content: '';
    display: block;
    width: 3.5rem;
    border-bottom: 0.5rem solid ${({ theme }) => theme.dark.colors.warning};
  }
`

export const Controllers = styled.div``
