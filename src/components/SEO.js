import React from 'react'
import Helmet from 'react-helmet'
import { graphql, StaticQuery } from 'gatsby'

const SEO = ({
  isBlogPost,
  location = {},
  lang = 'ja',
  title = '',
  cover = '',
  description = '',
}) => {
  const image = `${location.origin}${cover}`
  const imageTwitter = `${location.origin}${cover}`
  return (
    <StaticQuery
      query={siteQuery}
      render={data => {
        const twitterUsername = data.site.siteMetadata.twitterUsername
        return (
          <Helmet title={title}>
            {/* General tags */}
            <html lang={lang} />
            <meta name="description" content={description} />

            {/* OpenGraph tags */}
            <meta property="og:url" content={location.href} />
            <meta
              property="og:type"
              content={isBlogPost ? 'article' : 'website'}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />

            {/* Twitter Card tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content={twitterUsername} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={imageTwitter} />
          </Helmet>
        )
      }}
    />
  )
}
const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        twitterUsername
      }
    }
  }
`

export default SEO
