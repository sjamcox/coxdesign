import React from 'react'
import styled from 'styled-components'

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
            <a href={props.link}>Website →</a>
        </ProjectWrapper>
    )
}
