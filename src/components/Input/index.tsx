import { ChangeEventHandler } from 'react'

import Button from 'components/Button'
import WorldIcon from 'assets/world-icon.svg'
import BagIcon from 'assets/bag-icon.svg'

import { StyledInput, InputWrapper, IconWrapper } from './styles'

const icons = {
  world: WorldIcon,
  bag: BagIcon
}

export interface InputWrapperProps {
  icon?: 'world' | 'bag'
  large?: boolean
  hasButton?: boolean
}

export interface InputProps {
  placeholder?: string
  handleChange: ChangeEventHandler<HTMLInputElement>
  value: string
  handleClick?: () => void
}

const Input = ({
  placeholder = 'City, state, zip code or country',
  icon = 'world',
  large = false,
  hasButton = false,
  handleChange,
  value,
  handleClick
}: InputProps & InputWrapperProps) => (
  <InputWrapper large={large} hasButton={hasButton}>
    <IconWrapper src={icons[icon]} />
    <StyledInput
      onChange={handleChange}
      value={value}
      placeholder={placeholder}
    />
    {hasButton && <Button onClick={handleClick}>Search</Button>}
  </InputWrapper>
)

export default Input
