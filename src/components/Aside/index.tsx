import { useState } from 'react'
import * as S from './styled'
import Link from 'next/link'

import Toggle from '../Toggle'

import { MdExitToApp, MdClose, MdMenu } from 'react-icons/md'

import contents from './contents'
import Icons from './Icons'
import { useAuth } from '../../hooks/auth'

const Aside: React.FC = (): JSX.Element => {
  const { signOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Container isOpen={isOpen}>
      <S.Header>
        <S.MenuToggle onClick={handleToggleMenu}>
          {isOpen ? <MdClose /> : <MdMenu />}
        </S.MenuToggle>
        <S.LogoWrapper>
          <img src='/logo.svg' />
        </S.LogoWrapper>
        <S.Title>Minha Carteira</S.Title>
      </S.Header>

      <S.MenuContainer>
        {contents.map((content, i) => {
          const Icon = Icons[content.label]
          return (
            <Link href={content.href} passHref key={i}>
              <S.MenuItemLink>
                <Icon />
                {content.text}
              </S.MenuItemLink>
            </Link>
          )
        })}
        <S.MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </S.MenuItemButton>
      </S.MenuContainer>
      <S.ToggleWrapper isOpen={isOpen}>
        <Toggle labelLeft='Light' labelRight='Dark' />
      </S.ToggleWrapper>
    </S.Container>
  )
}

export default Aside
