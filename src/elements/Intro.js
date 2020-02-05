import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import logo from '../images/sc-monogram.png'

const Monogram = styled.img`
  width: 40px;
  margin-bottom: 20px;
`

const Intro = () => (
  <div className="intro">
      <Link to="/"><Monogram src={logo} /></Link>
      <p>Front-end developer<br />
      Graphic designer<br />
      Coffee consumer</p>
  </div>
)

export default Intro