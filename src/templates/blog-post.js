import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/layout'
import Wrapper from '../components/Wrapper'
import Hero from '../components/Hero'
import Article from '../components/Article'
import PrevNextPost from '../components/PrevNextPost'
import SEO from '../components/SEO'

const BlogPostTemplate = ({ pageContext, location, data }) => {
  const post = get(data, 'markdownRemark')
  const { previous, next } = pageContext
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
        cover={data.file.publicURL}
        lang={post.frontmatter.language}
        location={location}
        isBlogPost
      />

      <Hero
        heroImg={data.file.childImageSharp.fluid}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />

      <Wrapper>
        <Article post={post} />
      </Wrapper>

      <Wrapper>
        <PrevNextPost previous={previous} next={next} />
      </Wrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $coverRelativePath: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        slug
        language
        tags
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
