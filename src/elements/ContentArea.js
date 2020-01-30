import React from 'react'
import styled from 'styled-components'
import { device } from '../utils/devices'
import { colors } from '../utils/colors'

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

export const ContentArea = ({ children }) => {
    return (
        <ContentWrapper>
            <div className="mainText">{children}</div>
        </ContentWrapper>
    )
}


