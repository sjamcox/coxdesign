import React from 'react'

export const Project = (props) => {
    return (
        <div className="project">
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <a href={props.link}>Website →</a>
        </div>
    )
}
