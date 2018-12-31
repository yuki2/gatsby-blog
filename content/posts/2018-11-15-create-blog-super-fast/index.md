---
title: 爆速でBlogを作成し、公開する
slug: create-blog-super-fast
date: 2018-11-15
language: ja
tags:
  - gatsby
---

[Gatsby](https://www.gatsbyjs.org/)を使って、爆速でBlogを作成し、Firebaseにhostingする

## Gatsbyとは

- Reactベースの静的サイトジェネレータ。
- パフォーマンスがとても良い。早い。

## Blog作ってみる


### 1. Gatsbyをinstall

```
npm install --global gatsby-cli
```

### 2. Starterを探して動かしてみる

[ここ](https://www.gatsbyjs.org/starters/?v=2)から好きなStarterを探す。公式のは、[gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog)。

```
npx gatsby new my-blog-starter https://github.com/gatsbyjs/gatsby-starter-blog
cd my-blog-starter/
gatsby develop
```

### 3. hosting

いつもの
```
firebase init
```

firebase.jsonはいつも通りの設定で良い
```
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

あとはビルドしてデプロイ
```
gatsby build
firebase deploy
```




