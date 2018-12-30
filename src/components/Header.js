import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  display: block;
  width: 100%;
  z-index: 1000;
  background-color: rgba(19, 19, 51, 0.85);
`

const HeaderNav = styled.nav`
  margin-left: auto;
  margin-right: auto;
  height: 60px;
  display: flex;
  flex-direction: row;
  max-width: 1260px;
  z-index: 1000;
  justify-content: flex-start;
  overflow-x: auto;
  overflow-y: hidden;
`

const HeaderLink = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const HeaderHttpLink = styled.a`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  border: 0;
  margin: 0;
  margin-right: 0.5rem;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 42px;
  z-index: 10;
`

const renderLink = (headerLink, i) => {
  if (headerLink.url.startsWith('/')) {
    return (
      <HeaderLink to={headerLink.url} key={`header-link-${i}`}>
        {headerLink.label}
      </HeaderLink>
    )
  }
  return (
    <HeaderHttpLink href={headerLink.url} key={`header-link-${i}`}>
      {headerLink.label}
    </HeaderHttpLink>
  )
}

const Header = () => {
  return (
    <StaticQuery
      query={headerLinksQuery}
      render={data => {
        const headerLinks = data.site.siteMetadata.headerLinks
        return (
          <HeaderWrapper>
            <HeaderNav>
              {headerLinks.map((headerLink, i) => renderLink(headerLink, i))}
            </HeaderNav>
          </HeaderWrapper>
        )
      }}
    />
  )
}

const headerLinksQuery = graphql`
  query {
    site {
      siteMetadata {
        headerLinks {
          label
          url
        }
      }
    }
  }
`

export default Header
