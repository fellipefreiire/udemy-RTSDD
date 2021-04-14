import styled from 'styled-components'

interface IButtonProps {
  selected: boolean
  buttonType: string
}

export const Container = styled.div``

export const Content = styled.main``

export const Filters = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
`

export const Button = styled.button<IButtonProps>`
  font-size: 18px;
  font-weight: 600;
  background: none;
  color: ${({ theme }) => theme.dark.colors.white};
  margin: 0 0.5rem;
  transition: opacity 0.5s;
  opacity: ${({ selected }) => (selected ? 1 : 0.4)};

  &:hover {
    opacity: 0.7;
  }

  &:after {
    content: '';
    display: block;
    width: 3.5rem;
    padding-bottom: 0.25rem;
    margin: 0 auto;
    border-bottom: 10px solid
      ${({ theme, buttonType }) =>
        buttonType === 'recorrente'
          ? theme.dark.colors.success
          : theme.dark.colors.warning};
  }
`
