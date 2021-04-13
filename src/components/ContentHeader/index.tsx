import * as S from './styled'

interface IContentHeaderProps {
  title: string
  lineColor: string
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children
}): JSX.Element => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title lineColor={lineColor}>{title}</S.Title>
      </S.TitleWrapper>
      <S.Controllers>{children}</S.Controllers>
    </S.Container>
  )
}

export default ContentHeader
