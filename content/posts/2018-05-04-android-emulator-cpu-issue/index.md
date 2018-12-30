---
title: Android EmulatorによるCPU高負荷の対策
slug: android-emulator-cpu-issue
date: 2018-05-04
language: ja
tags:
  - android
---

Androidのエミュレータ(AVD)を使用していたら、macbook proのCPU使用率が100を超えていたのが嫌だったのでその際の対策

下記をエミュレータのconfigファイルに記載すると改善する

```
hw.audioInput=no
hw.audioOutput=no
```
Configファイルの場所は下記
Mac, Linux: ~/.android/avd/<AVD_Name>.avd/config.ini
Windows: C:\Users\<username>\.android\avd\<AVD_Name>.avd\config.ini
(Macは確認したが、Windows/Linuxは未確認)

## Ref

https://stackoverflow.com/questions/37063267/high-cpu-usage-with-android-emulator-qemu-system-i386-exe
