import React from "react"
import Intro from './Intro'
import MainNav from './MainNav'
import Contacts from './Contacts'
import styled from 'styled-components'
import { device } from '../utils/devices'
import { colors } from '../utils/colors'

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
    background-color: #ffffff;
  }    
`

const InnerHeaderWrapper = styled.div`
  height: 100%;
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${colors.mineshaft}
`

export const Header = () => (
  <HeaderWrapper>
    <InnerHeaderWrapper>
      <Intro />
      <MainNav />
      <Contacts />
    </InnerHeaderWrapper>
  </HeaderWrapper>
)


