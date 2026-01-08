<div align="center">

# 🎀 simple blog 🎀

<p>
  <img src="https://img.shields.io/badge/Docusaurus-3.9-blue?style=for-the-badge&logo=docusaurus" alt="Docusaurus"/>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License"/>
</p>

<p><b>✨ 基于 Docusaurus 构建的现代化个人博客 ✨</b></p>
<p>🎨 Electric Border 动态边框 | 🌐 中英双语支持 | 💬 Giscus 评论系统 | 🎯 像素风格字体</p>

</div>

---

## 📁 项目架构

```
simple_blog/
├── 📂 blog/                    # 博客文章目录
│   ├── authors.yml             # 作者信息配置
│   ├── tags.yml                # 标签配置
│   └── *.md / *.mdx            # 博客文章
├── 📂 docs/                    # 文档目录
│   ├── intro.md                # 文档入口
│   ├── tutorial-basics/        # 基础教程
│   └── tutorial-extras/        # 进阶教程
├── 📂 src/                     # 源代码目录
│   ├── components/             # React 组件
│   │   ├── Comments/           # Giscus 评论组件
│   │   ├── ElectricCard/       # Electric Border 卡片组件
│   │   └── HomepageFeatures/   # 首页特性展示
│   ├── css/
│   │   └── custom.css          # 全局样式 & 主题色
│   ├── pages/
│   │   └── index.js            # 首页组件
│   └── theme/                  # 主题覆盖
│       ├── BlogListPage/       # 自定义博客列表页
│       └── BlogPostItem/       # 自定义博客文章页
├── 📂 static/                  # 静态资源
│   ├── font/                   # 自定义字体
│   └── img/                    # 图片资源
├── 📂 i18n/                    # 国际化翻译
│   └── en/                     # English
├── 📄 docusaurus.config.js     # ⭐ 核心配置文件
├── 📄 sidebars.js              # 文档侧边栏配置
├── 📄 package.json             # 依赖管理
└── 📄 README.md                # 你正在看的文件
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

> 💡 开发服务器支持热重载，修改代码后自动刷新

### 清理缓存

```bash
# 清理 Docusaurus 缓存
npm run clear

# 或手动删除缓存目录
rm -rf .docusaurus node_modules/.cache
```

### 构建项目

```bash
# 构建所有语言版本
npm run build

# 仅构建中文版本
npm run build -- --locale zh-Hans
```

### 本地预览构建结果

```bash
npm run serve
```

---

## 🌐 国际化 (i18n)

### 自动生成翻译文件

```bash
# 生成所有翻译 JSON 文件
npm run write-translations -- --locale zh-Hans
npm run write-translations -- --locale en
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

## 🎨 特色功能

| 功能 | 描述 |
|------|------|
| ⚡ Electric Border | Canvas 绘制的动态电流边框效果 |
| 🎯 像素字体 | 全局标题使用自定义像素风格字体 |
| 💜 紫色主题 | 精心调配的紫色系配色方案 |
| 💬 Giscus 评论 | 基于 GitHub Discussions 的评论系统 |
| 🌓 暗色模式 | 自动跟随系统或手动切换 |
| 📱 响应式 | 完美适配桌面、平板、手机 |

---

## 📄 开源协议

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">
  <p>Made with 💜 and Docusaurus</p>
</div>
