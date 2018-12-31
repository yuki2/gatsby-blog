---
title: GatsbyのTutorialでよくわからなかった所を調査
slug: gatsby-tutorial-investigation
date: 2018-12-26
language: ja
tags:
  - gatsby
---

[GatsbyのTutrial](https://www.gatsbyjs.org/tutorial/)は非常にわかりやすいのだが、一部理解できなかった箇所があったため調査

## page queryで何故データが取得できるのか

[ここ](https://www.gatsbyjs.org/tutorial/part-four/#use-a-page-query)で、page query(`export const query = graphql...`のこと)でデータが取得できて不思議だった。誰かがcomponentにデータを渡さないといけないのに。。。

これは、Gatsbyがpagesフォルダを特別扱いしていて、ビルド時にpagesフォルダ以下に入っているcomponentにデータを渡しているためである。
で、(多分)この設計の制約が強すぎたので、pages以外でもgraphqlクエリが使えるようにStaticQueryが導入されたのだと思われる。

## そのgraphqlクエリで取得するデータはどこで設定されているのか
graphqlクエリで取得できるということは、誰かがデータをいい感じに保存しているはずなので調査。
結論としては、`gatsby-node.js`がビルド時に実行され、graphql形式でデータが保存されている。
`gatsby-node.js`は自身、Gatsby本体、plugin(`gatsby-source-filesystem`など)で設定されており、これらがビルド実行される

Gatsbyはビルドの概念が少し特殊で、ビルド時にjsを実行可能な状態に変換しているというだけでなく、このようなDB作成のようなことも行われているのが特徴。なので`gatsby develop`を実行すると、`gatsby-node.js`によってDB作成(のようなこと)が行われた後に、いつものdev serverがたち上がっている。個人的には、このGatsbyのビルドの概念を掴むのに少し苦労した

## StaticQueryとpage queryの違い

利便性だけかな、と思ったていたが、
[ここ](
https://www.gatsbyjs.org/docs/static-query/#how-staticquery-differs-from-page-query)にも書かれているが全然違った。
ざっくり個人的な意見を交えつつまとめると、こんな感じ

|           |使用場所|引数|
|-----------|---|---|
|page query |pages,templatesフォルダのみ|設定可能|
|StaticQuery|上記以外どこでも|設定不可|


page queryはgatsby-nodeでに引数を渡せるようにtemplateからpageを作る際によく使う。このようにcontextに引数を渡してpageを作ると
```javascript
createPage({
  path: post.node.frontmatter.slug,
  component: BlogPostTemplate,
  context: {
    slug: post.node.frontmatter.slug,
  }
})
```
こんな感じで引数で使えるようになる
```graphql
export const pageQuery = graphql`
  query BlogBySlug($slug: String!) {
  ...
}
`
```