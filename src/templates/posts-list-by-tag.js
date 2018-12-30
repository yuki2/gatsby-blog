import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import PostsList from '../components/PostsList'
import Wrapper from '../components/Wrapper'
import SEO from '../components/SEO'
import Hero from '../components/Hero'

const PostsListByTag = ({ pageContext, location, data }) => {
  const pageTitle = `#${pageContext.tag}`
  const posts = get(data, 'allMarkdownRemark.edges')
  return (
    <Layout>
      <SEO title={pageTitle} cover={data.file.publicURL} location={location} />
      <Hero title={pageTitle} heroImg={data.file.childImageSharp.fluid} />

      <Wrapper>
        <h1>Posts tagged as "{pageContext.tag}"</h1>
        <PostsList posts={posts} />
      </Wrapper>
    </Layout>
  )
}

export default PostsListByTag

export const pageQuery = graphql`
  query PostsByTag($tag: String!, $coverRelativePath: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            tags
            language
            slug
          }
        }
      }
    }
    file(relativePath: { eq: $coverRelativePath }) {
      publicURL
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
`
