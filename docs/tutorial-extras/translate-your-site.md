---
sidebar_position: 2
---

# 翻译你的网站

下面以把 `docs/intro.md` 翻译成法文为例。

## 配置 i18n

在 `docusaurus.config.js` 中新增 `fr` 语言：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
};
```

## 翻译文档

把 `docs/intro.md` 复制到 `i18n/fr` 目录：

```bash
mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md
```

然后在 `i18n/fr/docusaurus-plugin-content-docs/current/intro.md` 中写入法文翻译。

## 启动本地化站点

指定法语 locale 启动站点：

```bash
npm run start -- --locale fr
```

本地化站点可通过 [http://localhost:3000/fr/](http://localhost:3000/fr/) 访问，对应页面已被翻译。

:::caution
开发模式下一次只能启用一种语言。
:::

## 添加语言下拉菜单

为了在不同语言之间切换，在导航栏加入语言下拉菜单。

修改 `docusaurus.config.js`：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'localeDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

保存后，导航栏会显示语言切换下拉菜单：

![Locale Dropdown](./img/localeDropdown.png)

## 构建本地化站点

仅构建指定语言：

```bash
npm run build -- --locale fr
```

或者一次性构建所有语言版本：

```bash
npm run build
```
