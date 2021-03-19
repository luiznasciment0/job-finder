import styled, { css } from 'styled-components'

import { InputProps, InputWrapperProps } from '.'

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  align-items: center;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
  border-radius: 0.4rem;
  max-width: 35rem;
  ${({ large, hasButton }) => css`
    height: ${large ? '5.5rem' : '4.8rem'};
    padding: ${hasButton ? '1.6rem 0 1.6rem 1.6rem' : '1.6rem'};
  `}
  &:focus-within {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`

export const StyledInput = styled.input<InputProps>`
  font-family: 'Poppins', sans-serif;
  border: none;
  font-size: 1.2rem;
  outline: none;
  min-width: 20rem;
  ::placeholder {
    color: #b9bdcf;
  }
`

export const IconWrapper = styled.img`
  margin-right: 1.6rem;
  width: 1.5rem;
  height: 1.5rem;
`
