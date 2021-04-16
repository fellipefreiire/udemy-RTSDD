import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 100vh;
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`

export const H1 = styled.h1``

export const H3 = styled.h3`
  font-size: 1.5rem;
  margin-left: 1rem;
`

export const Form = styled.form`
  width: 22rem;
  height: 19rem;
  padding: 2rem 3rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.tertiary};
`

export const FormTitle = styled.h1`
  &:after {
    content: '';
    display: block;
    width: 55px;
    margin-top: -0.2rem;
    margin-bottom: 1.375rem;
    border-bottom: 10px solid ${({ theme }) => theme.colors.warning};
  }
`

export const Button = styled.button`
  width: 100%;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${({ theme }) => theme.colors.warning};
  color: ${({ theme }) => theme.colors.white};
  transition: opacity 0.3s;
  height: 2.5rem;
  margin-top: 2rem;

  &:hover {
    opacity: 0.7;
  }
`
