import * as S from './styled'
import Link from 'next/link'

import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdAccountBalanceWallet
} from 'react-icons/md'

import contents from './contents'
import Icons from './Icons'

import Logo from '../../assets/logo.svg'

const Aside: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <Logo />
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        {/* {contents.map((content, i) => {
          const Icon = Icons[content.label]
          return (
            <Link href={content.href} passHref key={i}>
              <S.MenuItemLink>
                <Icon />
                {content.text}
              </S.MenuItemLink>
            </Link>
          )
        })} */}
        <Link href='#' passHref>
          <S.MenuItemLink>
            <MdDashboard />
            Dashboard
          </S.MenuItemLink>
        </Link>
        <Link href='#' passHref>
          <S.MenuItemLink>
            <MdAccountBalanceWallet />
            Novo registro
          </S.MenuItemLink>
        </Link>
        <Link href='#' passHref>
          <S.MenuItemLink>
            <MdArrowUpward />
            Entradas
          </S.MenuItemLink>
        </Link>
        <Link href='#' passHref>
          <S.MenuItemLink>
            <MdArrowDownward />
            Saídas
          </S.MenuItemLink>
        </Link>
        <Link href='#' passHref>
          <S.MenuItemLink>
            <MdExitToApp />
            Sair
          </S.MenuItemLink>
        </Link>
      </S.MenuContainer>
    </S.Container>
  )
}

export default Aside
