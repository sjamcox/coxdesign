import React from "react"
import Intro from './Intro'
import MainNav from './MainNav'
import Contacts from './Contacts'
import styled from 'styled-components'
import { device } from '../utils/devices'

const HeaderWrapper = styled.header`
  @media ${device.mobileS} {
    display:none;
  }
  @media ${device.tablet} {
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

const Header = () => (
  <HeaderWrapper>
    <Intro />
    <MainNav />
    <Contacts />
  </HeaderWrapper>
)

export default Header


