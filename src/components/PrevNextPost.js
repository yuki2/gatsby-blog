import React, { Fragment } from 'react'
import RelatedPosts from './RelatedPosts'
import { Text } from './Commons'

const PrevNextPost = ({ previous, next }) => {
  const articles = [previous, next].filter(i => i).map(item => ({ node: item }))
  return (
    <Fragment>
      <Text>Read next:</Text>
      <RelatedPosts posts={articles} />
    </Fragment>
  )
}

export default PrevNextPost
