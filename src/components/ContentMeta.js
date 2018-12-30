import React, { Fragment } from 'react'
import styled from 'styled-components'
import TagList from './TagList'

const Header = styled.header`
  margin-bottom: 2rem;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(34, 34, 34, 0.6);
`

const PostDate = styled.time`
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const ContentMeta = ({ date, tags }) => {
  return (
    <Header>
      {Array.isArray(tags) && tags.length > 0 && (
        <Fragment>
          <TagList tags={tags} icon color={'#ffffff'} />
        </Fragment>
      )}
      {date && <PostDate>{date}</PostDate>}
    </Header>
  )
}

export default ContentMeta
