import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import TagList from './TagList'

const AllTagsList = () => {
  return (
    <StaticQuery
      query={tagQuery}
      render={data => {
        const tags = data.allMarkdownRemark.group.map(tag => tag.fieldValue)
        return <TagList tags={tags} icon={false} color={'#7f7e7e'} />
      }}
    />
  )
}

export default AllTagsList

const tagQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
