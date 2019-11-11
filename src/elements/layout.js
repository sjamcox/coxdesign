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
    flex-direction: column;
    flex-basis: 260px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: #ffffff;
    padding: 20px;
  }
`

const Layout = () => {

  return (
    <SiteContainer>
      <Header className="header"/>  
      <ContentArea>
        <h1>This is the header.</h1>
        <p>This is the body paragraph.</p>
      </ContentArea>
    </SiteContainer>
  )
}

export default Layout
