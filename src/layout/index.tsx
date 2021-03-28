import PageTitle from 'components/PageTitle'
import HeroSearch from 'components/HeroSearch'
import Checkbox from 'components/Checkbox'
import LocationSearch from 'components/LocationSearch'
import RadioGroup from 'components/RadioGroup'
import JobList from 'components/JobList'

import { Content, Main, CheckboxWrapper } from './styles'

const Layout = () => (
  <Content>
    <header>
      <PageTitle />
    </header>
    <Main>
      <HeroSearch />
      <CheckboxWrapper>
        <Checkbox label="Full time" />
      </CheckboxWrapper>
      <LocationSearch />
      <RadioGroup />
      <JobList />
    </Main>
  </Content>
)

export default Layout
