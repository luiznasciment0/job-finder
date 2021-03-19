import styled, { css, DefaultTheme } from 'styled-components'
import theme from 'styles/theme'
import React from 'react'

interface Props {
  color?: keyof typeof theme.colors
  size?: keyof typeof theme.font.sizes
  weight?: keyof typeof theme.font.weight
  family?: keyof typeof theme.font.family
  margin?: keyof typeof theme.margin
  tag?: React.ElementType
}

const marginModifier = {
  small: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.margin.small};
  `,
  medium: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.margin.medium};
  `,
  large: (theme: DefaultTheme) => css`
    margin-bottom: ${theme.margin.large};
  `
}

const Typography = styled('p').attrs<Props>(({ tag = 'p' }) => ({
  as: `${tag}`
}))<Props>`
  ${({
    color = 'darkBlue',
    size = 'medium',
    weight = 'normal',
    family = 'primary',
    margin,
    theme
  }) => css`
    font-family: ${theme.font.family[family]};
    font-size: ${theme.font.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${theme.font.weight[weight]};
    ${!!margin && marginModifier[margin](theme)}
  `}
`

export default Typography
