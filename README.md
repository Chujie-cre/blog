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
<p>🔍 智能筛选 | 🎨 Magic Bento 布局 | ⚡ Electric Border 动态边框 | 🌐 双语支持 | 💬 Giscus 评论 | 🎯 自定义字体 | 🌈 五彩主题</p>

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
# 构建所有语言版本（推荐）
npm run build

# 仅构建特定语言版本（使用环境变量）
DOCUSAURUS_CURRENT_LOCALE=zh-Hans npm run build  # 仅中文
DOCUSAURUS_CURRENT_LOCALE=en npm run build       # 仅英文

# Windows 系统使用 set 命令
set DOCUSAURUS_CURRENT_LOCALE=en && npm run build
```

> ⚠️ **重要提示**：
> - 建议直接使用 `npm run build` 构建所有语言版本，这是最稳定的方式
> - 单语言构建主要用于测试和调试，生产环境建议构建全部语言
> - 如果遇到构建错误，请先运行 `npm run write-translations` 生成翻译文件

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

## 🎨 特色功能

### 🔍 智能搜索与筛选
| 功能 | 描述 |
|------|------|
| 🔍 **全文搜索** | 支持搜索博客标题、描述、标签和正文内容 |
| �️ **多标签筛选** | 可同时选择多个标签进行交集筛选 |
| 📊 **智能排序** | 按日期、标题、随机排序，支持升降序 |
| ⚡ **性能优化** | 防抖搜索、React.memo、useMemo优化，告别卡顿 |
| 🎨 **美观界面** | 毛玻璃效果、流光动画、3D悬浮按钮 |
| 📱 **响应式设计** | 完美适配桌面、平板、手机各种屏幕 |

### � 页面布局
| 功能 | 描述 |
|------|------|
| 🏠 **Magic Bento 归档** | 1:1复刻ReactBits风格的不规则网格布局，支持粒子动画、聚光灯、3D倾斜等特效 |
| ⚡ **Electric Border 卡片** | Canvas绘制的动态电流边框效果，智能响应鼠标交互 |
| 🌈 **五彩缤纷主题** | 8种渐变色彩自动循环，亮暗主题智能适配 |
| 📐 **响应式布局** | 博客4列固定布局，标签页2列，归档页Magic Bento，完美适配各种屏幕 |
| 🎭 **简洁设计** | 隐藏页面主标题，专注内容展示，提升视觉体验 |

### 🎪 动画效果  
| 功能 | 描述 |
|------|------|
| ✨ **GSAP 动画引擎** | 流畅的粒子系统、3D倾斜、磁吸交互、点击涟漪效果 |
| 🔄 **旋转文字动画** | 首页动态文字轮播，支持分层动画效果 |
| 🎭 **网格动态效果** | Emoji网格的hover交互和位移动画 |
| 🌊 **滚动视差** | 页面滚动时的平滑视差动画效果 |
| 💫 **流光特效** | 按钮和输入框的流光扫过动画 |
| 🎨 **3D悬浮效果** | 所有交互元素的立体悬浮动画 |

### 🎨 视觉设计
| 功能 | 描述 |
|------|------|
| 🎯 **自定义字体系统** | 庞门正道（标题）+ 优设标题黑（副标题）+ 方正（正文）+ 站酷小薇（Logo） |
| 🌓 **智能主题切换** | 自动跟随系统或手动切换，深度定制亮暗模式 |
| 💎 **玻璃拟态效果** | backdrop-filter模糊背景，现代化视觉体验 |
| 🎪 **ChromaGrid组件** | 彩色卡片网格，支持聚光灯追踪效果 |
| 🌈 **渐变设计语言** | 统一的紫色系渐变主题，多层阴影立体效果 |
| 📊 **数据可视化** | 首页访问量统计，带数字滚动动画效果 |

### 🔧 技术特性
| 功能 | 描述 |
|------|------|
| 💬 **Giscus评论系统** | 基于GitHub Discussions的评论系统 |
| 🌐 **国际化支持** | 中英双语切换，完整的i18n支持 |
| 📱 **PWA就绪** | 支持离线访问和桌面安装 |
| 🚀 **性能优化** | React.lazy懒加载、代码分割、防抖搜索、CDN加速 |
| 🎯 **固定布局** | 强制固定网格比例，筛选时保持一致视觉体验 |

---

## 🎯 核心功能展示

### 🔍 智能博客筛选系统
```javascript
// BlogFilter 组件核心特性
✅ 全文搜索（标题+描述+标签+正文内容）
✅ 多标签交集筛选
✅ 智能排序（日期/标题/随机）
✅ 防抖优化（300ms）
✅ React.memo + useMemo 性能优化
✅ 毛玻璃 UI + 流光动画
✅ 固定布局比例，筛选不变形
```

### 🎨 自定义字体系统
```css
/* 四套字体完美搭配 */
--font-family-title: "庞门正道标题体"     /* 主标题，个性张扬 */
--font-family-subtitle: "优设标题黑"      /* 副标题，现代简约 */
--font-family-base: "FZG_CN"            /* 正文，易读清晰 */
--font-family-logo: "站酷小薇LOGO体"     /* Logo，独特标识 */
```

### ⚡ Electric Border 动态效果
```javascript
// Canvas 绘制的动态边框
✅ 鼠标跟随光效
✅ 动态粒子系统  
✅ 边框电流动画
✅ 智能颜色切换
✅ 硬件加速优化
```

### 🏠 Magic Bento 不规则布局
```javascript
// 复刻 ReactBits 风格
✅ 不规则网格自动排列
✅ GSAP 粒子动画系统
✅ 聚光灯跟随效果
✅ 3D 卡片倾斜交互
✅ 磁吸式鼠标响应
```

---

## 💡 开发亮点

### 🚀 性能优化实践
- **React.lazy + Suspense** - 组件懒加载，减少首屏加载时间
- **useMemo + useCallback** - 避免不必要的重渲染
- **防抖搜索** - 300ms 延迟，减少频繁计算
- **固定布局** - 强制网格尺寸，避免筛选时布局跳动
- **硬件加速** - backface-visibility: hidden 启用 GPU 加速

### 🎨 现代化 UI 设计
- **毛玻璃效果** - backdrop-filter: blur() 现代化背景
- **流光动画** - CSS 伪元素实现的扫光效果
- **3D 悬浮** - transform 实现的立体交互反馈
- **渐变设计** - 统一的紫色系品牌色彩
- **响应式布局** - 完美适配各种屏幕尺寸

### 🔧 工程化实践
- **组件化设计** - 高复用性的 React 组件库
- **TypeScript 支持** - 类型安全的开发体验  
- **国际化架构** - i18n 完整双语支持
- **主题覆盖** - Docusaurus 主题深度定制
- **字体管理** - 完整的自定义字体加载方案

---

## 📄 开源协议

本项目基于 [MIT License](./LICENSE) 开源。

---

<div align="center">
  <p>Made with 💜 and Docusaurus</p>
</div>
