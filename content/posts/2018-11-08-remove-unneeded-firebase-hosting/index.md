---
title: Firebase hostingで不要になったバージョンを削除する
slug: remove-unneeded-firebase-hosting
date: 2018-11-08
language: ja
tags:
  - firebase
---

Firebase hostingの1GB制限回避のために、バージョンの削除方法を探していた。
GUIでも削除できるが面倒なので、良い方法があった。

[Firebase Hosting Version Cleanup](https://gist.github.com/mbleigh/5be2e807746cdd9549d0c33260871d21)
```
node cleanupVersions.js <site_name> <versions_to_keep> [commit]
```

こんな感じ。
```
git clone https://gist.github.com/5be2e807746cdd9549d0c33260871d21.git firebase-hosting-cleanup-script
cd firebase-hosting-cleanup-script/
npm i
node cleanupVersions.js site_name 5 //dryRun
node cleanupVersions.js site_name 5 commit
```