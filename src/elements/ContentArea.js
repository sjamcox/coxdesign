import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'

const ContentWrapper = styled.main`
    background-color: #eeeeee;
    width: 100%;
    @media ${device.mobileS} {
        padding: 10vh 5vw;
    }
    @media ${device.tablet} {
        padding: 20vh 5vw 5vh 5vw;
        overflow: auto;
    }  
`

export const ContentArea = ({ children }) => {
    return (
        <ContentWrapper>
            <div className="mainText">{children}</div>
        </ContentWrapper>
    )
}


