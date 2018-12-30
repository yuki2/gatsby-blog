import React from 'react'
import styled from 'styled-components'
import Content from './Content'

const ArticleWrapper = styled.article`
  padding: 0 30px 30px;

  @media only screen and (max-width: 500px) {
    padding: 0;
  }
`

const Article = ({ post }) => {
  return (
    <ArticleWrapper>
      <Content
        content={post.html}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      />
    </ArticleWrapper>
  )
}

export default Article
