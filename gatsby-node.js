const { resolve } = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const config = require('./data/siteConfig')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const BlogPostTemplate = resolve('./src/templates/blog-post.js')
  const PostsByTagTemplate = resolve('./src/templates/posts-list-by-tag.js')
  const PostsTemplate = resolve('./src/templates/posts-list.js')

  const coverDefaultPath = 'cover.jpg'

  const allMarkdown = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                title
                slug
                tags
                cover {
                  relativePath
                }
              }
            }
          }
        }
      }
    `
  )

  if (allMarkdown.errors) {
    console.error(allMarkdown.errors)
    throw Error(allMarkdown.errors)
  }

  const posts = allMarkdown.data.allMarkdownRemark.edges

  // generate paginated post list
  const postsPerPage = config.postsPerPage
  const nbPages = Math.ceil(posts.length / postsPerPage)

  Array.from({ length: nbPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/` : `/pages/${i + 1}`,
      component: PostsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        currentPage: i + 1,
        nbPages: nbPages,
        coverRelativePath: coverDefaultPath,
      },
    })
  })

  // generate blog posts
  posts.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    const coverRelativePath = post.node.frontmatter.cover
      ? post.node.frontmatter.cover.relativePath
      : coverDefaultPath

    createPage({
      path: post.node.frontmatter.slug,
      component: BlogPostTemplate,
      context: {
        slug: post.node.frontmatter.slug,
        previous,
        next,
        coverRelativePath,
      },
    })
  })

  // generate tags
  posts
    .filter(item => item.node.frontmatter.tags !== null)
    .reduce(
      (acc, cur) => [...new Set([...acc, ...cur.node.frontmatter.tags])],
      []
    )
    .forEach(uniqTag => {
      createPage({
        path: `tags/${uniqTag}`,
        component: PostsByTagTemplate,
        context: {
          tag: uniqTag,
          coverRelativePath: coverDefaultPath,
        },
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
