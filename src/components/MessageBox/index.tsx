import * as S from './styled'

interface IMessageBoxProps {
  title: string
  description: string
  footerText: string
  icon: string
}

const MessageBox: React.FC<IMessageBoxProps> = ({
  title,
  description,
  footerText,
  icon
}): JSX.Element => {
  return (
    <S.Container>
      <S.Header>
        <S.H1>
          {title}
          <img src={icon} alt='Happy image' />
        </S.H1>
        <S.P>{description}</S.P>
      </S.Header>
      <S.Footer>
        <S.Span>{footerText}</S.Span>
      </S.Footer>
    </S.Container>
  )
}

export default MessageBox
