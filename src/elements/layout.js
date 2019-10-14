import React from "react"
import styled from 'styled-components'
import Header from "./Header"
import ContentArea from './ContentArea'
import "./layout.css"

const SiteContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  header {
    display: flex;
    flex-direction: column;
    flex-basis: 300px;
    flex-grow: 0;
    flex-shrink: 0;
    justify-content: space-between;
    background-color: #555555;
    padding: 20px;
  }
`

const Layout = () => {

  return (
    <SiteContainer>
      <Header className="header"/>  
      <ContentArea />
    </SiteContainer>
  )
}

export default Layout
