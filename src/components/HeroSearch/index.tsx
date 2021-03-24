import Input from 'components/Input'
import BackgroundImg from 'assets/backgroundImg.png'

import { Hero } from './styles'

const HeroSearch = () => (
  <Hero img={BackgroundImg}>
    <Input hasButton icon="bag" />
  </Hero>
)

export default HeroSearch
