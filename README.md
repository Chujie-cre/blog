<div align="center">

# 🎀 Simple Code 🎀

<p>
  <img src="https://img.shields.io/badge/Docusaurus-3.9-blue?style=for-the-badge&logo=docusaurus" alt="Docusaurus"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock" alt="GSAP"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

<p><b>✨ 基于 Docusaurus 构建的现代化个人技术博客 ✨</b></p>
<p>🔍 智能筛选 | 🎨 Magic Bento 布局 | ⚡ Electric Border 动态边框 | 🌐 双语支持 | 💬 Giscus 评论 | 🎯 自定义字体 | 🌈 雏结主题</p>

</div>

---

## 📁 项目架构

```
my_blog/
├── 📂 .docusaurus/             # Docusaurus 构建缓存目录
├── 📂 .git/                    # Git 版本控制目录
├── 📂 blog/                    # 博客文章目录
│   ├── authors.yml             # 作者信息配置
│   ├── tags.yml                # 标签配置
│   ├── 2019-05-28-first-blog-post.md    # 示例博客文章
│   ├── 2019-05-29-long-blog-post.md     # 示例长文章
│   ├── 2021-08-01-mdx-blog-post.mdx     # MDX 格式示例
│   └── 2021-08-26-welcome/              # 带资源的文章目录
│       ├── index.md            # 文章内容
│       └── docusaurus-plushie-banner.jpeg # 文章图片
├── 📂 build/                   # 构建输出目录（自动生成）
├── 📂 docs/                    # 文档目录
│   ├── intro.md                # 文档入口
│   ├── tutorial-basics/        # 基础教程
│   │   ├── congratulations.md  # 完成教程页面
│   │   ├── create-a-blog-post.md # 创建博客文章教程
│   │   ├── create-a-document.md  # 创建文档教程
│   │   ├── create-a-page.md      # 创建页面教程
│   │   ├── deploy-your-site.md   # 部署网站教程
│   │   └── markdown-features.md  # Markdown 功能介绍
│   └── tutorial-extras/        # 进阶教程
│       ├── _category_.json     # 分类配置
│       ├── manage-docs-versions.md # 文档版本管理
│       └── translate-your-site.md  # 网站翻译教程
├── 📂 i18n/                    # 国际化翻译目录
│   └── en/                     # 英文翻译
│       ├── code.json           # UI 文本翻译
│       ├── docusaurus-plugin-content-blog/ # 博客翻译
│       ├── docusaurus-plugin-content-docs/ # 文档翻译
│       ├── docusaurus-plugin-content-pages/ # 页面翻译
│       └── docusaurus-theme-classic/        # 主题翻译
├── 📂 node_modules/            # Node.js 依赖包（自动生成）
├── 📂 src/                     # 源代码目录
│   ├── components/             # React 组件库（19个组件）
│   │   ├── 🔍 BlogFilter/      # ⭐ 智能博客筛选组件
│   │   │   ├── index.jsx       # 组件主文件（搜索+标签+排序）
│   │   │   └── styles.module.css # 组件样式（毛玻璃+流光效果）
│   │   ├── 🌈 ChromaGrid/      # 彩色网格展示组件
│   │   │   ├── index.jsx       # 网格布局组件
│   │   │   └── styles.module.css # 彩色渐变样式
│   │   ├── 💬 Comments/        # Giscus 评论集成组件
│   │   │   └── index.jsx       # GitHub Discussions 评论
│   │   ├── ✨ CurvedText/      # 弧形文字效果组件
│   │   │   ├── index.jsx       # 弧形路径文字
│   │   │   └── styles.module.css # 弧形动画样式
│   │   ├── 🛠️ CustomSearch/    # 自定义搜索组件（待开发）
│   │   ├── ⚡ ElectricCard/     # Electric Border 动态边框卡片
│   │   │   ├── index.jsx       # 主组件文件
│   │   │   ├── styles.module.css # 卡片基础样式
│   │   │   ├── ElectricCanvas.jsx # Canvas 电流动画
│   │   │   └── ColorUtils.js   # 颜色工具函数
│   │   ├── 🎪 FlowingMenu/     # 流动菜单动画组件
│   │   │   ├── index.jsx       # 菜单流动效果
│   │   │   └── styles.module.css # 流动动画样式
│   │   ├── 📁 Folder/          # 文件夹交互组件
│   │   │   ├── index.jsx       # 文件夹展开动画
│   │   │   └── styles.module.css # 文件夹样式
│   │   ├── 🎭 GridMotion/      # Emoji 网格动画效果
│   │   │   ├── index.jsx       # 网格动画逻辑
│   │   │   └── styles.module.css # 动画效果样式
│   │   ├── 🏠 HomepageFeatures/ # 首页特性展示组件
│   │   │   ├── index.jsx       # 特性卡片组件
│   │   │   └── styles.module.css # 特性展示样式
│   │   ├── 🏠 HomepageHero/    # 首页英雄区域轮播
│   │   │   ├── index.jsx       # 轮播组件主文件
│   │   │   └── styles.module.css # 轮播样式和动画
│   │   ├── 📊 HomepageLinks/   # 首页链接展示（含访问量统计）
│   │   │   ├── index.jsx       # 链接展示+数字动画
│   │   │   └── styles.module.css # 链接卡片样式
│   │   ├── 🌊 HomepageScrollAnimation/ # 首页滚动视差动画
│   │   │   ├── index.jsx       # 滚动动画逻辑
│   │   │   └── styles.module.css # 视差动画样式
│   │   ├── 🔄 LogoLoop/        # Logo 循环动画组件
│   │   │   ├── index.jsx       # Logo 轮播动画
│   │   │   └── styles.module.css # 循环动画样式
│   │   ├── 🎨 MagicBento/      # Magic Bento 不规则网格布局
│   │   │   ├── index.jsx       # Bento 网格主组件
│   │   │   └── styles.module.css # 不规则网格样式
│   │   ├── 🔄 RotatingText/    # 首页旋转文字动画
│   │   │   ├── index.jsx       # 文字旋转逻辑
│   │   │   └── styles.module.css # 旋转动画样式
│   │   ├── 📚 ScrollStack/     # 滚动堆栈效果组件
│   │   │   ├── index.jsx       # 堆栈滚动效果
│   │   │   └── styles.module.css # 堆栈动画样式
│   │   ├── 🎯 StaggeredMenu/   # 交错菜单动画组件
│   │   │   ├── index.jsx       # 交错动画菜单
│   │   │   └── styles.module.css # 交错动画样式
│   │   └── 🎯 TargetCursor/    # 自定义鼠标跟随组件
│   │       ├── index.jsx       # 鼠标跟随效果
│   │       └── styles.module.css # 跟随动画样式
│   ├── css/
│   │   └── custom.css          # ⭐ 全局样式 & 自定义字体配置
│   ├── pages/                  # 自定义页面
│   │   ├── index.js            # 首页组件
│   │   ├── index.module.css    # 首页样式
│   │   └── markdown-page.md    # Markdown 示例页面
│   └── theme/                  # 主题覆盖目录
│       ├── Root.tsx            # 应用根组件覆盖
│       ├── BlogArchivePage/    # ⭐ 自定义博客归档页
│       │   ├── index.tsx       # 归档页主组件（隐藏标题）
│       │   └── styles.module.css # 归档页样式
│       ├── BlogListPage/       # ⭐ 自定义博客列表页
│       │   ├── index.tsx       # 列表页主组件（集成筛选）
│       │   └── styles.css      # 列表页样式（固定布局）
│       ├── BlogPostItem/       # 博客文章项组件覆盖
│       │   └── Header.jsx      # 文章头部覆盖
│       ├── BlogPostItems/      # 博客文章列表组件覆盖
│       │   └── index.tsx       # 文章列表覆盖
│       ├── BlogTagsListPage/   # ⭐ 自定义标签页
│       │   ├── index.tsx       # 标签页主组件（隐藏标题）
│       │   └── styles.module.css # 标签页样式
│       ├── Footer/             # 页脚组件覆盖
│       │   └── index.jsx       # 自定义页脚
│       ├── NavbarItem/         # 导航栏项组件覆盖
│       │   └── index.jsx       # 导航项覆盖
│       └── NavbarItems/        # 导航栏项目组件覆盖
│           ├── index.jsx       # 导航项目覆盖
│           └── ComponentTypes/ # 组件类型定义
├── 📂 static/                  # 静态资源目录
│   ├── font/                   # ⭐ 自定义字体库
│   │   ├── 庞门正道标题体.ttf  # 主标题字体（3MB）
│   │   ├── 优设标题黑.ttf      # 副标题字体（1.4MB）
│   │   ├── FZG_CN.ttf          # 正文字体（9.4MB）
│   │   └── 站酷小薇LOGO体.otf  # Logo字体（4MB）
│   ├── img/                    # 图片资源
│   │   ├── favicon.ico         # 网站图标
│   │   ├── logo.svg            # 网站 Logo
│   │   ├── docusaurus.png      # Docusaurus 默认图
│   │   ├── docusaurus-social-card.jpg # 社交分享图
│   │   └── undraw_*.svg        # Undraw 插画资源
│   ├── favicon.ico             # 根目录图标
│   └── favicon.svg             # SVG 图标
├── 📄 .gitignore               # Git 忽略文件配置
├── 📄 LICENSE                  # MIT 开源协议
├── 📄 README.md                # 项目说明文档
├── 📄 docusaurus.config.js     # ⭐ Docusaurus 核心配置
├── 📄 package-lock.json        # NPM 锁定文件
├── 📄 package.json             # ⭐ 项目依赖管理
└── 📄 sidebars.js              # 文档侧边栏配置
```

---

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
# 启动开发服务器（默认中文）
npm start

# 启动英文版本
npm start -- --locale en
```

> 💡 开发服务器支持热重载，修改代码后自动刷新，有些情况例外


### 清理缓存

```bash
# 清理 Docusaurus 缓存
npm run clear

# 或手动删除缓存目录
rm -rf .docusaurus node_modules/.cache
```


### 构建项目

```bash
# 构建所有语言版本（推荐）
npm run build

### 本地预览构建结果
```bash
npm run serve
```

---


## 🌐 国际化 (i18n)

### 自动生成翻译文件

```bash
# 生成所有翻译 JSON 文件
npx docusaurus write-translations --locale en
```

### 翻译文件位置

| 类型 | 路径 |
|------|------|
| UI 文本 | `i18n/{locale}/code.json` |
| 文档侧边栏 | `i18n/{locale}/docusaurus-plugin-content-docs/current.json` |
| 博客配置 | `i18n/{locale}/docusaurus-plugin-content-blog/options.json` |
| 文档内容 | `i18n/{locale}/docusaurus-plugin-content-docs/current/` |
| 博客内容 | `i18n/{locale}/docusaurus-plugin-content-blog/` |

<br/>

---

## 📝 博客 Frontmatter 字段说明

在博客文章的 YAML frontmatter 中，可以使用以下字段：

### 基础字段

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `title` | string | ✅ | 文章标题 |
| `description` | string | ❌ | 文章描述，用于 SEO 和预览 |
| `slug` | string | ❌ | 自定义 URL 路径 |
| `date` | date | ❌ | 发布日期 (YYYY-MM-DD) |
| `authors` | array | ❌ | 作者列表，引用 `authors.yml` 中的 key |
| `tags` | array | ❌ | 标签列表，引用 `tags.yml` 中的 key |
| `image` | string | ❌ | 文章封面图 URL |
| `draft` | boolean | ❌ | 是否为草稿（不发布） |
| `unlisted` | boolean | ❌ | 是否隐藏（不在列表显示但可访问） |

### 扩展字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `last_update.date` | date | 最后更新日期 |
| `last_update.author` | string | 最后更新作者 |
| `difficulty` | string | 文章难度：`easy` / `middle` / `hard`，配置见 `difficulty.yml` |
| `prerequisites` | array | 前置知识标签，配置见 `prerequisites.yml` |
| `how` | array | 本文将学到的内容列表 |
| `hardware` | array | 需要的硬件设备列表 |
| `series` | string | 系列文章名称 |
| `part` | number | 系列文章的第几部分 |
| `status` | string | 文章状态：`maintained` / `outdated` / `archived` |

### 高级字段

| 字段 | 类型 | 说明 |
|------|------|------|
| `sidebar_position` | number | 侧边栏排序位置 |
| `keywords` | array | SEO 关键词列表 |
| `readingTime` | boolean | 是否显示阅读时间 |
| `toc` | boolean | 是否显示目录 |
| `toc_min_heading_level` | number | 目录最小标题级别 |
| `toc_max_heading_level` | number | 目录最大标题级别 |
| `className` | string | 自定义 CSS 类名 |
| `pagination_label` | string | 分页导航显示文本 |
| `pagination_prev` | string | 上一篇文章 slug |
| `pagination_next` | string | 下一篇文章 slug |
| `custom_edit_url` | string | 自定义编辑链接 |
| `metadata.og:type` | string | Open Graph 类型 |

### 示例

```yaml
---
title: 使用 ESP32 + WebRTC 实现低延迟语音对讲
description: ESP32 上实现 WebRTC 实时语音通信的完整工程实践
date: 2026-01-13
authors: [chujie]
tags: [ESP32, WebRTC, 嵌入式]
image: /blog/hero_img/esp32.svg
difficulty: hard
prerequisites: [javascript, html]
how:
  - 理解 WebRTC 在嵌入式设备上的实现原理
  - 掌握 ESP32 音频采集与播放
series: ESP32 WebRTC
part: 1
---
```

---

## 📁 目录结构说明

| 目录 | 说明 |
|------|------|
| `blog/` | 博客文章目录，包含 Markdown/MDX 文件和配置文件 |
| `docs/` | 文档目录，包含教程和 API 文档 |
| `i18n/` | 国际化翻译目录，包含各语言的翻译文件 |
| `src/components/` | React 组件库，包含 20+ 自定义组件 |
| `src/css/` | 全局样式和自定义字体配置 |
| `src/pages/` | 自定义页面（首页等） |
| `src/plugins/` | 自定义 Docusaurus 插件 |
| `src/theme/` | 主题覆盖组件（导航栏、页脚、博客页等） |
| `static/` | 静态资源（图片、字体、图标等） |
| `static/blog/` | 博客相关静态资源 |
| `static/font/` | 自定义字体文件 |

---

## 📄 开源协议

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">
  <p>Made with 💜 by 雏结 and Docusaurus</p>
</div>
