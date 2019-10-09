import PropTypes from "prop-types"
import React from "react"
import MainNav from './mainNav'
import StyledBackgroundSection from "./backgroundSection"

const Header = ({ siteTitle }) => (
  <header>
    <MainNav />
    <StyledBackgroundSection />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
