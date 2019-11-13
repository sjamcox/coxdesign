import React from 'react'
import { Link } from 'gatsby'

export const Button = (props) => {
    return (
        <Link to={props.link}>
            <button>{props.children}</button>
        </Link>
    )
}
