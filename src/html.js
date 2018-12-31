import React from 'react'
import PropTypes from 'prop-types'

const HTML = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => {
  return (
    <html {...htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta
          name="google-site-verification"
          content="3y-WnRf9IYJw_h7te4TQFSaCgpj0djcg3VPnTsXNaHE"
        />
        {headComponents}
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: body }}
        />
        {postBodyComponents}
      </body>
      <noscript>{`
        <p>Please enable javascript in your browser</p>
    `}</noscript>
    </html>
  )
}

export default HTML

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
