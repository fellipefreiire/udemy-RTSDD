import * as S from './styled'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <S.Grid>
        <MainHeader />
        <Aside />
        <Content>{children}</Content>
      </S.Grid>
    </>
  )
}

export default Layout
