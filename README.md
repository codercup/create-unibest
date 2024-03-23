
<h1 align="center">✨create unibest✨</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/create-unibest"><img src="https://img.shields.io/npm/dm/create-unibest?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/create-unibest"><img src="https://img.shields.io/npm/v/create-unibest?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<h2 align="center">
<sub>>_ Easy to use create unibest</sub>
</h2>

## 📖 介绍

`create-unibest` 是一个用于快速创建 `unibest` 项目的轻量脚手架工具，它可以帮助你快速创建一个基于 `vite` + `vue3` + `TS` 的 `uni-app` 项目，同时提供了一些模板供你选择。

## 🚤 快速使用

```shell
pnpm create unibest <项目名称> # 默认用 base 模板
pnpm create unibest <项目名称> -t <模板名>
```

`create unibest` 支持 `-t` 参数选择模板，目前已有 `6` 个模板，分别是 `base`、`demo`、`i18n`、`ucharts`、`hbx-base`、`hbx-demo`。

```sh
# VS Code 模板
pnpm create unibest my-project # 默认用 base 模板
pnpm create unibest my-project -t base # 基础模板
pnpm create unibest my-project -t demo # 所有demo的模板(包括i18n)
pnpm create unibest my-project -t i18n # 多语言模板
pnpm create unibest my-project -t ucharts # 秋云图表模板

# HBuilderX 模板，方便使用 uniCloud 云开发
pnpm create unibest my-project -t hbx-base # hbx的base模板
pnpm create unibest my-project -t hbx-demo # hbx的demo模板，包含所有的demo
```