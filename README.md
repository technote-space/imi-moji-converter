# IMI 全角半角統一コンポーネント

[![npm version](https://badge.fury.io/js/%40technote-space%2Fimi-moji-converter.svg)](https://badge.fury.io/js/%40technote-space%2Fimi-moji-converter)
[![CI Status](https://github.com/technote-space/imi-moji-converter/workflows/CI/badge.svg)](https://github.com/technote-space/imi-moji-converter/actions)
[![codecov](https://codecov.io/gh/technote-space/imi-moji-converter/branch/master/graph/badge.svg)](https://codecov.io/gh/technote-space/imi-moji-converter)
[![CodeFactor](https://www.codefactor.io/repository/github/technote-space/imi-moji-converter/badge)](https://www.codefactor.io/repository/github/technote-space/imi-moji-converter)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/technote-space/doctoc/blob/master/LICENSE)

入力文字列に含まれる全角文字を半角文字に変換した結果を返す関数、
および、
入力文字列に含まれる半角文字を全角文字に変換した結果を返す関数を提供します。

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<details>
<summary>Details</summary>

- [IMI 全角半角統一コンポーネント](#imi-%E5%85%A8%E8%A7%92%E5%8D%8A%E8%A7%92%E7%B5%B1%E4%B8%80%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88)
  - [Table of Contents](#table-of-contents)
  - [利用者向け情報](#%E5%88%A9%E7%94%A8%E8%80%85%E5%90%91%E3%81%91%E6%83%85%E5%A0%B1)
    - [インストール](#%E3%82%A4%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%AB)
  - [API](#api)
    - [toHalfWidth(string)](#tohalfwidthstring)
    - [toFullWidth(string)](#tofullwidthstring)
  - [使用例](#%E4%BD%BF%E7%94%A8%E4%BE%8B)
  - [Author](#author)

</details>
<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 利用者向け情報

### インストール

```shell
yarn add @technote-space/imi-moji-converter
```

## API

### toHalfWidth(string)

入力として与えられた string に含まれる全角数字を半角数字に、全角アルファベットを半角アルファベットに、全角カナを半角カナに変換した文字列を返します。

### toFullWidth(string)

入力として与えられた string に含まれる半角数字を全角数字に、半角アルファベットを全角アルファベットに、半角カナを全角カナに変換した文字列を返します。


## 使用例

```main.ts
import {toHalfWidth, toFullWidth} from '@technote-space/imi-moji-converter';

console.log(toHalfWidth("あかさたな０１２３４５６７８９"));
console.log(toFullWidth("ｱｶｻﾀﾅ0123456789"));
```

## Author
[GitHub (Technote)](https://github.com/technote-space)  
[Blog](https://technote.space)
