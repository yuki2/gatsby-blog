import { graphql, StaticQuery } from 'gatsby'
import Image from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'

const BioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const AuthorImage = styled(Image)`
  border-radius: 100%;
  margin: 6px;
`

const AuthorText = styled.div`
  display: flex;
  flex-direction: column;
`

const Bio = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const authorName = data.site.siteMetadata.authorName
        const authorDescription = data.site.siteMetadata.authorDescription
        return (
          <BioWrapper>
            <AuthorImage fixed={data.file.childImageSharp.fixed} />
            <AuthorText>
              <h4 style={{ marginBottom: '3px' }}>{authorName}</h4>
              <p>{authorDescription}</p>
            </AuthorText>
          </BioWrapper>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query {
    site {
      siteMetadata {
        authorName
        authorDescription
      }
    }
    file(relativePath: { eq: "avatar.jpg" }) {
      childImageSharp {
        fixed(width: 80, height: 80) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Bio
