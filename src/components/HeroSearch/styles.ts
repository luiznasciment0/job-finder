import styled, { css } from 'styled-components'

type HeroProps = {
  img?: string
}

export const Hero = styled.div<HeroProps>`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 13.8rem;
  border-radius: 0.8rem;
  padding: 4rem 1.8rem;
  ${({ img }) => css`
    background-image: url(${img});
    background-repeat: no-repeat;
    background-position: center;
  `}
`
