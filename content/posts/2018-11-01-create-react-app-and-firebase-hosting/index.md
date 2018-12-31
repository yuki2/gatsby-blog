---
title: create react appしてfirebaseにhostingする
slug: create-react-app-and-firebase-hosting
date: 2018-11-01
language: ja
tags:
  - react
  - reactjs
  - firebase
---

create react appしてfirebaseにhostingする。
hostingサービスは他にもあるが、firebase使ってみたいのでやってみる

## 準備

- [npm](https://www.npmjs.com/)をインストール。[nvm](https://github.com/creationix/nvm)経由でインストールがおすすめ
- [Firebase](https://firebase.google.com)にログインして、適当なプロジェクトを作成する
- `npm install -g firebase-tools`でfirebase-toolsをインストール

## 1. React App 作成

[create-react-app](https://facebook.github.io/create-react-app/)を使う
```
npx create-react-app my-app
```

念の為動作確認して問題ないことを確認しておく
```
cd my-app
npm start
```

## 2. Firebase setup

基本、[公式サイト](https://firebase.google.com/docs/hosting/quickstart)通りで良い。プロジェクトのルートフォルダ(今回だとmy-app)で、下記を実行し、init実行時の選択でhostingを選べば良い
```
firebase login
firebase init
```

注意としては
- init時に、作成したはずのfirebaseのプロジェクトが選択できない場合があるが、後から`firebase use --add`でプロジェクトの追加ができるので問題ない
- hostingを選ぶ際にspaceを押してからenterを押すこと
- hosting選択後に色々聞いてくるが基本Noで良い

最後に、firebase.jsonを下記のように書き換えれば準備は終わり
```
{
  "hosting": {
    "public": "build",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 3. Firebase deploy

ビルドしてデプロイするだけ。ターミナルに表示されるサイトにアクセスすれば、実際にhostingされていることがわかる
```
npm run build
firebase deploy
```