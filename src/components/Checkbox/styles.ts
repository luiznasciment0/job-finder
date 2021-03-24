import styled from 'styled-components'

import { CheckboxProps } from '.'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  label {
    cursor: pointer;
    padding-left: 1.2rem;
    line-height: 1;
  }
`

export const Input = styled.input<CheckboxProps>`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 2px;
  cursor: pointer;
`
