import { useRef } from 'react'

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

const useInputFocus = () => {
  const inputWrapperRef = useRef<HTMLDivElement>(null)
  const setFocus = () =>
    inputWrapperRef.current?.style.setProperty(
      'box-shadow',
      '0px 4px 8px rgba(0, 0, 0, 0.2)'
    )
  const setBlur = () =>
    inputWrapperRef.current?.style.setProperty(
      'box-shadow',
      '0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)'
    )

  return {
    inputWrapperRef,
    setFocus,
    setBlur
  }
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
}: InputProps & InputWrapperProps) => {
  const { setBlur, setFocus, inputWrapperRef } = useInputFocus()

  return (
    <InputWrapper
      onFocus={setFocus}
      onBlur={setBlur}
      ref={inputWrapperRef}
      large={large}
      hasButton={hasButton}
    >
      <IconWrapper src={icons[icon]} />
      <StyledInput placeholder={placeholder} />
      {hasButton && <Button>Search</Button>}
    </InputWrapper>
  )
}

export default Input
