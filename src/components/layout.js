import React, { Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'

import 'prismjs/themes/prism-tomorrow.css'
import { GlobalStyle } from './Commons'

const Layout = ({ siteMetadata, children }) => {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <div style={{ margin: '60px 0' }}>{children}</div>
      <Footer siteMetadata={siteMetadata} />
    </Fragment>
  )
}

export default Layout
