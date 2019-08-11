/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import withStyles from "@material-ui/core/styles/withStyles";

import Header from '../shared/Header/Header'
import Footer from '../shared/Footer/Footer'

import navbarsStyle from "../jss/maritim/views/componentsSections/navbarsStyle.jsx";

import HeaderLinks from "../shared/Header/HeaderLinks.jsx";

import GlobalStyle from '../theme/global'

const Layout = ({ children, classes, is_login }) => {
  console.log(classes)
  return (
    <>
      <GlobalStyle />
      <Header
        absolute
        color="transparent"
        brand="Maritim muda nasional"
        rightLinks={<HeaderLinks />}
      />
      <div
        id='wrapper'
      >
        <main>{children}</main>
        <Footer whiteFont={is_login ? true : false} />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object,
  is_login: PropTypes.bool,
}

export default withStyles(navbarsStyle)(Layout);
