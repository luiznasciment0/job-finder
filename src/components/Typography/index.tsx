import styled, { css } from 'styled-components'
import theme from 'styles/theme'

interface Props {
  color: keyof typeof theme.colors
  size: keyof typeof theme.font.sizes
  weight: keyof typeof theme.font.weight
  family: keyof typeof theme.font.family
  tag: React.ElementType
}

const Typography = styled('p').attrs<Props>(({ tag = 'p' }) => ({
  as: `${tag}`
}))<Props>`
  ${({
    color = 'black',
    size = 'medium',
    weight = 'normal',
    family = 'primary',
    theme
  }) => css`
    font-family: ${theme.font.family[family]};
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${theme.font.weight[weight]};
  `}
`

export default Typography
