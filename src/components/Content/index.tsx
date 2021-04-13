import * as S from './styled'

const Content: React.FC = ({ children }): JSX.Element => {
  return (
    <>
      <S.Container>{children}</S.Container>
    </>
  )
}

export default Content
