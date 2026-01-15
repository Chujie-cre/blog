// @ts-check
// `@type` JSDoc 注解可以为编辑器提供自动补全和类型检查（需要配合 `@ts-check`）
// Docusaurus 配置有多种等价的声明方式
// 参考文档: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// 此文件运行在 Node.js 环境 - 不要在这里使用客户端代码（浏览器 API、JSX...）

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simple Code',
  tagline: '技术分享与总结',
  favicon: '/favicon.ico',

  // 未来版本标志，参考: https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // 提前兼容即将发布的 Docusaurus v4
  },

  // 网站生产环境的 URL（部署后的域名）
  url: 'https://your-docusaurus-site.example.com',
  // 网站的基础路径，如果部署在子目录则需要修改
  // GitHub Pages 部署时通常是 '/<仓库名>/'
  baseUrl: '/',

  // GitHub Pages 部署配置（如果不使用 GitHub Pages 可以忽略）
  organizationName: 'facebook', // GitHub 组织名或用户名
  projectName: 'docusaurus', // GitHub 仓库名

  // 链接检查策略：'throw' 表示检测到无效链接时报错
  onBrokenLinks: 'throw',

  // 国际化配置（多语言支持）
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
      en: { label: 'English' },
    },
  },

  // 插件配置：扩展 Docusaurus 功能
  plugins: [
    './src/plugins/blog-meta-plugin.js', // 自定义博客元数据插件（difficulty/prerequisites）
  ],

  // 主题配置：可以添加额外主题如搜索
  themes: [
    // 暂时禁用搜索插件以修复keymap错误
    // [
    //   require.resolve("@easyops-cn/docusaurus-search-local"),
    //   /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
    //   ({
    //     hashed: true,
    //     language: ["zh", "en"],
    //     highlightSearchTermsOnTargetPage: true,
    //     explicitSearchResultPath: true,
    //   }),
    // ],
  ],

  // 预设配置：classic 预设包含文档、博客、页面、主题等核心功能
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // ===== 文档配置 =====
        docs: {
          sidebarPath: './sidebars.js', // 侧边栏配置文件
          editUrl: 'https://github.com/Chujie-cre/blog/tree/main/', // “编辑此页”链接
        },
        // ===== 博客配置 =====
        blog: {
          routeBasePath: 'blog',       // 博客路由前缀，设为 '/' 可作为首页
          blogTitle: '博客',            // 博客页面标题
          blogDescription: '我的技术博客', // SEO 描述
          postsPerPage: 12,            // 每页显示文章数
          blogSidebarCount: 'ALL',     // 侧边栏显示文章数，'ALL' 表示全部
          blogSidebarTitle: '全部文章',  // 侧边栏标题
          tagsBasePath: 'tags',        // 标签页路径
          archiveBasePath: 'archive',  // 归档页路径
          showReadingTime: true,       // 显示阅读时间
          sortPosts: 'descending',     // 文章排序：降序（最新在前）
          truncateMarker: /<!--\s*(truncate)\s*-->/,  // 摘要截断标记
          // RSS/Atom 订阅配置
          feedOptions: {
            type: ['rss', 'atom'],     // 生成的 feed 类型
            xslt: true,                // 启用 XSLT 样式
            title: 'Simple Code 博客',
            description: '技术分享与总结',
            copyright: `Copyright © ${new Date().getFullYear()} Simple Code.`,
            language: 'zh-Hans',
          },
          editUrl: 'https://github.com/Chujie-cre/blog/tree/main/', // “编辑此页”链接
          onInlineTags: 'warn',        // 行内标签警告（建议使用 tags.yml）
          onInlineAuthors: 'warn',     // 行内作者警告（建议使用 authors.yml）
          onUntruncatedBlogPosts: 'warn', // 未截断文章警告
        },
        // ===== 主题配置 =====
        theme: {
          customCss: './src/css/custom.css', // 自定义 CSS 文件
        },
      }),
    ],
  ],


  // ===== 主题配置（外观、导航、页脚等） =====
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', // 社交分享卡片图片
      colorMode: {
        respectPrefersColorScheme: true, // 跟随系统亮/暗模式
      },
      // ===== 导航栏配置 =====
      navbar: {
        title: 'Simple Code',  // 网站名称
        logo: {
          alt: '网站Logo',
          src: 'favicon.svg',  // Logo 图片路径
        },
        hideOnScroll: true,    // 滚动时隐藏导航栏
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/blog/archive', label: '归档', position: 'left'},
          {to: '/blog/tags', label: '标签', position: 'left'},
          // 搜索组件（暂时禁用，需要配置搜索插件后启用）
          // { type: 'search', position: 'right' },
          {
            href: 'https://github.com/Chujie-cre/blog',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',  // 语言切换下拉框
            position: 'right',
          },
          {
            type: 'custom-themeToggle',  // 自定义主题切换按钮
            position: 'right',
          },
          {
            type: 'custom-menuButton',   // 自定义菜单按钮
            position: 'right',
          },
        ],
      },
      // ===== 页脚配置 =====
      footer: {
        style: 'dark',  // 页脚样式：'dark' 或 'light'
        links: [
          {
            title: '文档',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
              {
                label: 'API参考',
                to: '/docs/category/api',
              },
            ],
          },
          {
            title: '内容',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: '归档',
                to: '/blog/archive',
              },
              {
                label: '标签',
                to: '/blog/tags',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'X',
                href: 'https://x.com/docusaurus',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Chujie-cre/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 我的项目. 基于 Docusaurus 构建.`,
      },
      // ===== 代码高亮配置 =====
      prism: {
        theme: prismThemes.github,      // 亮色主题代码样式
        darkTheme: prismThemes.dracula, // 暗色主题代码样式
      },
    }),
  // ===== 外部脚本配置 =====
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js', // 不蒜子访问统计
      async: true,
    },
  ],
};

export default config;
