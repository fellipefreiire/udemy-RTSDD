import * as S from './styled'

const ContentHeader: React.FC = (): JSX.Element => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Título</S.Title>
      </S.TitleWrapper>
      <S.Controllers>
        <button type='button'>Botão A</button>
        <button type='button'>Botão B</button>
      </S.Controllers>
    </S.Container>
  )
}

export default ContentHeader
