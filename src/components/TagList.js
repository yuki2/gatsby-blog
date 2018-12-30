import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListContainer = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  color: ${props => props.color};
`

const TagListItem = styled(Link)`
  margin-left: 0.3rem;
  color: ${props => props.color};

  &:hover {
    border-bottom: 1px dotted ${props => props.color};
  }
  &:before {
    content: '#';
  }
`

const TagList = ({ tags, icon, color }) => {
  return (
    <ListContainer color={color}>
      {icon === true && <Fragment>🏷</Fragment>}
      {tags.map((tag, i) => {
        return (
          <Fragment key={`tag-list-${i}`}>
            <TagListItem color={color} to={`tags/${tag}`}>
              {tag}
            </TagListItem>
            {i < tags.length - 1 ? ', ' : ''}
          </Fragment>
        )
      })}
    </ListContainer>
  )
}

export default TagList
