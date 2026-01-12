---
sidebar_position: 1
---

# 教程简介

用不到 5 分钟的时间，快速认识 **Docusaurus**。

## 快速开始

第一步：**创建一个全新站点**。

或者直接使用 **[docusaurus.new](https://docusaurus.new)** **在线体验**。

### 准备工作

- [Node.js](https://nodejs.org/en/download/) 20.0 及以上版本：
  - 安装 Node.js 时，建议勾选所有与依赖有关的选项，避免缺失组件。

## 生成新站点

使用 **classic** 模板创建一个新的 Docusaurus 站点。

运行以下命令后，classic 模板会自动添加到你的项目中：

```bash
npm init docusaurus@latest my-website classic
```

可以在命令提示符、PowerShell、Terminal，或你使用的任何代码编辑器内置终端中执行这条命令。

该命令会同时安装运行 Docusaurus 所需的全部依赖。

## 启动本地站点

先启动开发服务器：

```bash
cd my-website
npm run start
```

`cd` 用于切换当前终端目录。要操作刚创建的 Docusaurus 站点，需要先进入对应目录。

`npm run start` 会在本地构建网站并启动开发服务器，你可以在 http://localhost:3000/ 访问并预览。

打开本页 `docs/intro.md`，修改任意内容：站点会**自动热更新**并实时显示你的更改。
