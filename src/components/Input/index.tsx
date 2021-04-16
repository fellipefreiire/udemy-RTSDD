import { InputHTMLAttributes } from 'react'
import * as S from './styled'

type IInputProps = InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<IInputProps> = ({ ...rest }) => <S.Container {...rest} />

export default Input
