import React, { ReactNode } from 'react'
import Header from '../Header'
import * as Styled from './styled'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Styled.Main>{children}</Styled.Main>
    </>
  )
}

export default Layout
