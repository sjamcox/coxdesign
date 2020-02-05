import React from "react"
import styled from 'styled-components'
import 'normalize.css'
import { GlobalStyle } from '../utils/GlobalStyle'
import { Header } from "../elements/Header"
import { ContentArea } from '../elements/ContentArea'

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

const Layout = ({ children }) => {

  return (
    <>
      <GlobalStyle />
      <SiteContainer>
        <Header className="header"/>  
        <ContentArea>
          {children}
        </ContentArea>
      </SiteContainer>
    </>
  )
}

export default Layout
