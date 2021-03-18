import styled, { css } from 'styled-components'

interface Props {
  size?: 'large' | 'normal'
}

const sizeModifier = {
  large: () => css`
    width: 14.6rem;
  `,
  normal: () => css`
    width: 10.4rem;
  `
}

const Button = styled.button<Props>`
  ${({ size = 'normal' }) => css`
    ${!!size && sizeModifier[size]}
  `}
  height: 4.7rem;
  border-radius: 0.4rem;
  background: #1e86ff;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  border: none;
`

export default Button
