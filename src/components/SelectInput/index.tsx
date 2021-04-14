import * as S from './styled'

interface ISelectInputProps {
  options: {
    value: string | number
    label: string | number
  }[]
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined
  defaultValue?: string | number
}

const SelectInput: React.FC<ISelectInputProps> = ({
  options,
  onChange,
  defaultValue
}): JSX.Element => {
  return (
    <S.Container>
      <S.Select onChange={onChange} defaultValue={defaultValue}>
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
