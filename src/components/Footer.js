import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import Bio from './Bio'

const FooterWrapper = styled.footer`
  text-align: left;
  padding-top: 30px;
  padding-bottom: 50px;
  background-color: rgba(19, 19, 51, 0.85);
  color: #ffffff;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;

  & nav {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    max-width: 900px;
    margin: 0 auto;

    .footer-col {
      flex: 1 auto;
      display: inline-flex;
      align-items: center;
      flex-direction: column;
      margin-bottom: 1em;
      padding-right: 1em;
    }
  }

  & a {
    color: #ffffff;
    font-weight: bold;

    &:hover {
      color: #e8e8e8;
      border-bottom: 1px dotted #e8e8e8;
    }
  }

  .footer-col > p {
    margin: 0;
  }
  .footer-title {
    margin: 0 0 1rem;
  }

  .footer-item {
    padding: 0.25rem 0;
    color: #ffffff;
  }

  .footer-heart {
    color: red;
  }

  .footer-item-text {
    padding: 0.1rem 0;
    color: #ffffff;
  }

  .footer-header {
    order: 1;
    margin: 0 0.25rem;
    margin-right: 0.25rem;
    padding: 0.25rem;
  }
`

const Footer = () => {
  return (
    <StaticQuery
      query={footerQuery}
      render={data => {
        const websiteHost = data.site.siteMetadata.websiteHost
        return (
          <FooterWrapper>
            <nav>
              <div className="footer-col">
                <div>
                  <Bio />
                  <div>
                    <p className="footer-item-text">
                      Built with{' '}
                      <a
                        className="footer-link"
                        href="https://www.gatsbyjs.org"
                      >
                        Gatsby
                      </a>
                      .
                    </p>
                    <p className="footer-item-text">
                      Hosted with <span className="footer-heart">❤</span> by{' '}
                      <a className="footer-link" href={websiteHost.url}>
                        {websiteHost.name}
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </nav>
          </FooterWrapper>
        )
      }}
    />
  )
}

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        websiteHost {
          name
          url
        }
      }
    }
  }
`

export default Footer
