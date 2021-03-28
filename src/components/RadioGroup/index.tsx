import Radio from 'components/Radio'

import { Wrapper } from './styles'

const RadioGroup = () => (
  <Wrapper>
    <Radio label="London" />
    <Radio label="Amsterdam" />
    <Radio label="New York" />
    <Radio label="Berlin" />
  </Wrapper>
)

export default RadioGroup
