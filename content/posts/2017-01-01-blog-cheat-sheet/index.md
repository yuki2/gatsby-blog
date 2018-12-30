---
title: Blog Cheat Sheet
slug: blog-cheat-sheet
date: 2017-01-01
cover: mountain.jpg
language: ja
tags:
    - cheatsheet
    - fake
---

このブログの書き方

## Settings

```
title: Blog Cheat Sheet //title
slug: blog-cheat-sheet //folder名の最後につける
date: 2017-01-01 //日付。folder名の最初につける
cover: mountain.jpg //同一フォルダ内にある画像名を指定するとヘッダに反映される
language: ja
tags:
    - cheatsheet
    - fake
```

## Style

Markdown記法

画像も相対パス指定(`./foo`)で表示可能
![gif](./git-push-force.gif)

コードハイライトは\`\`\`js{7}という風に書けば行数でハイライトされる
```js{7}
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
```