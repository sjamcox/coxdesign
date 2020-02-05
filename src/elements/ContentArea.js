import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { device } from '../utils/devices'
import { colors } from '../utils/colors'
import logo from '../images/sc-monogram-inverted.png'

const ContentWrapper = styled.main`
    background-color: ${colors.zodiac};
    width: 100%;
    p {
        color: ${colors.gallery};
    }
    h1 {
        color: ${colors.white};
    }
    h3 {
        color: ${colors.white};
    }
    @media ${device.mobileS} {
        padding: 10vh 5vw;
    }
    @media ${device.tablet} {
        padding: 20vh 5vw 5vh 5vw;
        overflow: auto;
    }  
`

const Monogram = styled.img`
    width: 40px;
    margin-bottom: 20px;
    @media ${device.tablet} {
        display: none;
    } 
`

export const ContentArea = ({ children }) => {
    return (
        <ContentWrapper>
            <Link to="/"><Monogram src={logo} /></Link>
            {children}
        </ContentWrapper>
    )
}


