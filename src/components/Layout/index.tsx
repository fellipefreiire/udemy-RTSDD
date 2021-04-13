import * as S from './styled'

import MainHeader from '../MainHeader'
import Aside from '../Aside'
import Content from '../Content'

const Layout: React.FC = (): JSX.Element => {
  return (
    <>
      <S.Grid>
        <MainHeader />
        <Aside />
        <Content />
      </S.Grid>
    </>
  )
}

export default Layout
