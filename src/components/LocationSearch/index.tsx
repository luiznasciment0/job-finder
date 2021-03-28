import Input from 'components/Input'
import Typography from 'components/Typography'

import { Wrapper } from './styles'

const LocationSearch = () => (
  <Wrapper>
    <Typography margin="medium" weight="bold" size="medium" color="palegray">
      LOCATION
    </Typography>
    <Input placeholder="City, state, zip code or country" icon="world" />
  </Wrapper>
)

export default LocationSearch
