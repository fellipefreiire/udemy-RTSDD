import Input from '../Input'

import * as S from './styled'

import Logo from '../../assets/logo.svg'

const SignIn: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.LogoWrapper>
        <Logo />
        <S.H3>Minha Carteira</S.H3>
      </S.LogoWrapper>

      <S.Form onSubmit={() => {}}>
        <S.FormTitle>Entrar</S.FormTitle>
        <Input type='email' required placeholder='Seu e-mail' />
        <Input type='password' required placeholder='Sua senha' />

        <S.Button type='submit'>Acessar</S.Button>
      </S.Form>
    </S.Container>
  )
}

export default SignIn
