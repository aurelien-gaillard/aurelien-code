import styled from 'styled-components'
import { media, theme } from '../../theme'

export const Header = styled.header`
  height: 5rem;
  background-color: ${theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 90vw;
  max-width: ${theme.maxWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing(2)};
`

export const Nav = styled.nav`
  display: none;
  ${media.m`
  display: block;
  `}
  ul {
    display: flex;
    li {
      margin-right: ${theme.spacing(8)};
    }
    a {
      color: ${theme.color.text.main};
      text-transform: capitalize;
      font-weight: bold;
      letter-spacing: ${theme.letterSpacing};
      padding: ${theme.spacing(2)} 0;
      transition: ${theme.transition};
      &:hover {
        color: ${theme.color.primary.main};
        box-shadow: 0px 2px ${theme.color.primary.main};
      }
    }
  }
`

export const BurgerButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${theme.color.primary.main};
  cursor: pointer;
  padding: 0;
  transition: ${theme.transition};
  display: flex;
  &:hover {
    color: ${theme.color.primary.darker};
  }
  ${media.m`
    display: none;
  `}
`
