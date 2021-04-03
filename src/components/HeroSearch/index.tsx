import Input from 'components/Input'
import BackgroundImg from 'assets/backgroundImg.png'

import { Hero } from './styles'
import { ChangeEventHandler } from 'react'

interface Props {
  value: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  handleClick: () => void
}

const HeroSearch = ({ value, handleChange, handleClick }: Props) => {
  return (
    <Hero img={BackgroundImg}>
      <Input
        value={value}
        handleClick={handleClick}
        handleChange={handleChange}
        hasButton
        icon="bag"
        placeholder="Title, companies, expertise or benefits"
      />
    </Hero>
  )
}

export default HeroSearch
