import React from "react"
import styled from 'styled-components'
import Header from "./Header"
import { ContentArea } from './ContentArea'
import "./layout.css"

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`

const Layout = ({ children }) => {

  return (
      <SiteContainer>
        <Header className="header"/>  
        <ContentArea>
          {children}
        </ContentArea>
      </SiteContainer>
  )
}

export default Layout
