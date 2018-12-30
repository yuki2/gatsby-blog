import React from 'react'
import { Link } from 'gatsby'
import TagList from './TagList'
import styled from 'styled-components'

const Post = styled.article`
  border-bottom: 1px solid rgba(214, 209, 230, 0.5);
  padding-bottom: 1.25rem;
`

const ReadPost = styled(Link)`
  display: block;
  font-size: 0.75rem;
  margin-top: 1rem;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 2;

  &:hover {
    background-color: rgba(19, 19, 51, 0.85);
    border-radius: 0.25rem;
    color: #fff;
  }
`

const PostDate = styled.time`
  color: #7f7e7e;
  &:before {
    content: '🗓';
    margin-right: 0.2rem;
  }
`

const PostHeader = styled.header`
  padding: 1em 0;
`

const Excerpt = styled.p`
  line-height: 1.45;
  padding-bottom: 0.5em;
`

const PostTitleLink = styled(Link)`
  &:hover {
    border-bottom: 1px dotted rgba(34, 34, 34, 0.8);
  }
`

const PostsListItem = ({ title, excerpt, slug, date, language, tags }) => {
  return (
    <Post>
      <PostHeader>
        <h2>
          <PostTitleLink to={slug}>{title}</PostTitleLink>
        </h2>
      </PostHeader>
      <section>
        <Excerpt dangerouslySetInnerHTML={{ __html: excerpt }} />
      </section>
      <footer>
        <TagList tags={tags} icon color={'#7f7e7e'} />
        <PostDate>{date}</PostDate>
        <ReadPost to={slug}>Read post ›</ReadPost>
      </footer>
    </Post>
  )
}

export default PostsListItem
