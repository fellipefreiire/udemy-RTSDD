import * as S from './styled'

import SelectInput from '../SelectInput'
import ContentHeader from '../ContentHeader'

const Dashboard: React.FC = (): JSX.Element => {
  const options = [
    { value: 'Rodrigo', label: 'Rodrigo' },
    { value: 'Felipe', label: 'Felipe' },
    { value: 'Ana', label: 'Ana' }
  ]
  return (
    <>
      <S.Container>
        <ContentHeader title='Dashboard' lineColor='info'>
          <SelectInput options={options} />
        </ContentHeader>
      </S.Container>
    </>
  )
}

export default Dashboard
