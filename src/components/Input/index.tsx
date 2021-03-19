import Button from 'components/Button'
import WorldIcon from 'assets/world-icon.svg'
import BagIcon from 'assets/bag-icon.svg'
// get icons from https://fonts.google.com/icons

import { StyledInput, InputWrapper, IconWrapper } from './styles'

export interface InputWrapperProps {
  icon?: 'world' | 'bag'
  large?: boolean
  hasButton?: boolean
}

export interface InputProps {
  placeholder?: string
}

const icons = {
  world: WorldIcon,
  bag: BagIcon
}

const Input = ({
  placeholder = 'City, state, zip code or country',
  icon = 'world',
  large = false,
  hasButton = false
}: InputProps & InputWrapperProps) => (
  <InputWrapper large={large} hasButton={hasButton}>
    <IconWrapper src={icons[icon]} />
    <StyledInput placeholder={placeholder} />
    {hasButton && <Button>Search</Button>}
  </InputWrapper>
)

export default Input
