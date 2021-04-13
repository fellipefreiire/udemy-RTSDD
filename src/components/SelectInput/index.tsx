import * as S from './styled'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }): JSX.Element => {
  return (
    <S.Container>
      <S.Select>
        {options.map((option, i) => (
          <option value={option.value} key={i}>
            {option.label}
          </option>
        ))}
      </S.Select>
    </S.Container>
  )
}

export default SelectInput
