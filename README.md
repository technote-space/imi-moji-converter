# IMI 全角半角統一コンポーネント

入力文字列に含まれる全角文字を半角文字に変換した結果を返す関数、
および、
入力文字列に含まれる半角文字を全角文字に変換した結果を返す関数を提供します。

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

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
