// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simple Code',
  tagline: '技术分享与总结',
  favicon: '/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '简体中文' },
      en: { label: 'English' },
    },
  },

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

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Chujie-cre/blog/tree/main/',
        },
        blog: {
          routeBasePath: 'blog',
          blogTitle: '博客',
          blogDescription: '我的技术博客',
          postsPerPage: 12,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '全部文章',
          tagsBasePath: 'tags',
          archiveBasePath: 'archive',
          showReadingTime: true,
          sortPosts: 'descending',
          truncateMarker: /<!--\s*(truncate)\s*-->/,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
            title: 'Simple Code 博客',
            description: '技术分享与总结',
            copyright: `Copyright © ${new Date().getFullYear()} Simple Code.`,
            language: 'zh-Hans',
          },
          editUrl: 'https://github.com/Chujie-cre/blog/tree/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Simple Code',
        logo: {
          alt: '网站Logo',
          src: 'favicon.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '教程',
          },
          {to: '/blog', label: '博客', position: 'left'},
          {to: '/blog/archive', label: '归档', position: 'left'},
          {to: '/blog/tags', label: '标签', position: 'left'},
          // 暂时移除搜索组件以修复插件错误
          // {
          //   type: 'search',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/Chujie-cre/blog',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            type: 'custom-menuButton',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '教程',
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
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  scripts: [
    {
      src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js',
      async: true,
    },
  ],
};

export default config;
