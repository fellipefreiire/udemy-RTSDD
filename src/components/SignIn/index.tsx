import { useState } from 'react'

import Input from '../Input'
import { useAuth } from '../../hooks/auth'

import * as S from './styled'

import Logo from '../../assets/logo.svg'

const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const { signIn } = useAuth()

  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
        <S.H3>Minha Carteira</S.H3>
      </S.LogoWrapper>

      <S.Form onSubmit={() => signIn(email, password)}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input
          type='email'
          required
          placeholder='Seu e-mail'
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          type='password'
          required
          placeholder='Sua senha'
          onChange={e => setPassword(e.target.value)}
        />

        <S.Button type='submit'>Acessar</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn
