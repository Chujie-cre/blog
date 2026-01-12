---
sidebar_position: 1
---

# 管理文档版本

Docusaurus 支持同时维护文档的多个版本。

## 创建一个文档版本

发布项目的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

上述命令会把 `docs` 目录复制到 `versioned_docs/version-1.0`，并生成 `versions.json`。

此时你会拥有两个版本的文档：

- `1.0`：访问 `http://localhost:3000/docs/`，对应正式发布的 1.0 文档
- `current`：访问 `http://localhost:3000/docs/next/`，对应**即将发布的最新文档**

## 添加版本下拉菜单

为了在不同版本间无缝切换，可以在导航栏添加版本下拉菜单。

修改 `docusaurus.config.js`：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: 'docsVersionDropdown',
        },
        // highlight-end
      ],
    },
  },
};
```

保存后，你会在导航栏看到文档版本下拉菜单：

![Docs Version Dropdown](./img/docsVersionDropdown.png)

## 更新已有版本

可以在对应目录中直接修改已版本化的文档：

- `versioned_docs/version-1.0/hello.md` → 更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` → 更新 `http://localhost:3000/docs/next/hello`
