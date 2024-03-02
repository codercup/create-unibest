
<h1 align="center">✨create unibest✨</h1>

<p align="center">
    <a href="https://www.npmjs.com/package/create-unibest"><img src="https://img.shields.io/npm/dm/create-unibest?colorA=363a4f&colorB=f5a97f&style=for-the-badge"></a>
    <a href="https://www.npmjs.com/package/create-unibest"><img src="https://img.shields.io/npm/v/create-unibest?colorA=363a4f&colorB=a6da95&style=for-the-badge"></a>
</p>

<h2 align="center">
<sub>>_ Easy to use create unibest▌</sub>
</h2>

# 📦 使用

```shell
# pnpm
    pnpm create unibest

# npm
    npm create unibest@latest
```

> [!TIP]
> 建议添加上标记名（@latest），否则 npm 可能会解析到缓存的过时软件包版本。

## 📖 介绍

`create-unibest` 是一个用于快速创建 `uni-app` 项目的轻量脚手架工具，它可以帮助你快速创建一个基于 `vite` 和 `vue3` 的 `uni-app` 项目，同时提供了一些模板供你选择。

## 🚤 快速使用

```shell
pnpm create uni <项目名称> -t <模板>
```

目前支持 `base`、`i18n`、`demo`三种模板。

```sh
pnpm create unibest my-unibest -t base # 基础模板
pnpm create unibest my-unibest -t i18n # 多语言模板
pnpm create unibest my-unibest -t demo # 所有demo的模板，还包含了i18n
```

- 如果想学习所有的 `demo`，可以通过 `pnpm create unibest my-unibest -t demo` 生成。(包含了所有的 `demo` 和 `i18n` 代码)
- 如果是新开发一个项目，建议使用 `base` 模板，可以通过 `pnpm create unibest my-unibest -t base` 生成。（不含 `demo` 代码）
- 如果项目有多语言需求，建议使用 `i18n` 模板，可以通过 `pnpm create unibest my-unibest -t i18n` 生成。（不含 `demo` 代码）
