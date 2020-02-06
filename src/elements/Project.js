import React from 'react'
import styled from 'styled-components'
import { Button } from '../elements/Button'

const ProjectWrapper = styled.div`
    p {
        margin-bottom: 0.5rem;
    }
`

export const Project = (props) => {
    return (
        <ProjectWrapper>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <Button link={props.link} type="external">Website →</Button>
        </ProjectWrapper>
    )
}
