import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import PostsList from '../components/PostsList'
import Pagination from '../components/Pagination'
import SEO from '../components/SEO'
import AllTagList from '../components/AllTagList'

const PostsListTemplate = ({ pageContext, location, data }) => {
  const title = get(data, 'site.siteMetadata.title')
  const description = get(data, 'site.siteMetadata.description')
  const posts = get(data, 'allMarkdownRemark.edges')
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        cover={data.file.publicURL}
        location={location}
      />
      <Hero title={title} heroImg={data.file.childImageSharp.fluid} />

      <Wrapper>
        <PostsList posts={posts} />
      </Wrapper>

      <Wrapper>
        <AllTagList />
      </Wrapper>

      <Pagination
        nbPages={pageContext.nbPages}
        currentPage={pageContext.currentPage}
      />
    </Layout>
  )
}

export default PostsListTemplate

export const pageQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!, $coverRelativePath: String!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
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
