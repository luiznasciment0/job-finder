import styled from 'styled-components'
import media from 'styled-media-query'

const Button = styled.button`
  height: 4.7rem;
  border-radius: 0.4rem;
  background: #1e86ff;
  color: #ffffff;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  border: none;
  width: 10.4rem;
  ${media.greaterThan('medium')`
    width: 14.6rem;
  `}
`

export default Button
