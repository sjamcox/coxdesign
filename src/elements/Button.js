import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { colors } from '../utils/colors'

const StyledButton = styled.button`
    background-color: ${colors.crimson};
    border: none;
    border-radius: 20px;
    display: block;
    line-height: 0;
    margin: 20px 0;
    padding: 10px 20px;

    &:hover {
    background-color: ${colors.cinnabar};
    }

    a {
        text-decoration: none;
        color: ${colors.white};
        font-size: 12px;
    }
`

export const Button = ({ children, link }) => {
    return (
            <StyledButton>
                <Link to={link}>
                    {children}
                </Link>
            </StyledButton>
    )
}
