import React from "react"
import styled from 'styled-components'
import Header from "./Header"
import { ContentArea } from './ContentArea'
import "./layout.css"

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  header {
    display: flex;
    position: sticky;
    top: 0;
    left: 0;
    height: 100vh;
    flex-direction: column;
    flex-basis: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 20px;
  }
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
