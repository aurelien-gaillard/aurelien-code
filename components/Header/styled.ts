import styled from 'styled-components'
import { theme } from '../../theme'

export const Header = styled.header`
  background-color: aliceblue;
`

export const Wrapper = styled.div`
  max-width: ${theme.maxWidth};
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${theme.spacing(2)};
`

export const Nav = styled.nav`
  ul {
    display: flex;
  }
`

export const BurgerButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: ${theme.color.primary.main};
  cursor: pointer;
  transition: var(--transition);
  &:hover {
    color: ${theme.color.primary.darker};
  }
`
