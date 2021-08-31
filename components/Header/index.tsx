import React from 'react'
import Logo from './Logo'
import * as Styled from './styled'
import { FaAlignRight } from 'react-icons/fa'
import { links, routes } from '../../routes'
import Link from 'next/link'
const Header = () => {
  return (
    <Styled.Header>
      <Styled.Wrapper>
        <Link href={routes.homepage.path}>
          <a>
            <Logo />
          </a>
        </Link>
        <Styled.BurgerButton>
          <FaAlignRight />
        </Styled.BurgerButton>
        <Styled.Nav>
          <ul>
            {links.map((link) => (
              <li key={link.path}>
                <Link href={link.path}>
                  <a>{link.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </Styled.Nav>
      </Styled.Wrapper>
    </Styled.Header>
  )
}

export default Header
