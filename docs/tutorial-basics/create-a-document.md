---
sidebar_position: 2
---

# 创建一篇文档

文档本质上是彼此关联的**多页面集合**，通过以下方式组织：

- **侧边栏** 导航
- **上一页 / 下一页** 跳转
- **版本管理** 体系

## 创建第一篇文档

在 `docs/hello.md` 新建一个 Markdown 文件：

```md title="docs/hello.md"
# Hello

这是我的第一篇 **Docusaurus 文档**！
```

现在可以在 [http://localhost:3000/docs/hello](http://localhost:3000/docs/hello) 访问它。

## 配置侧边栏

Docusaurus 会基于 `docs` 目录自动生成**侧边栏**。

添加如下元数据即可自定义侧边栏标签及顺序：

```md title="docs/hello.md" {1-4}
---
sidebar_label: 'Hi!'
sidebar_position: 3
---

# Hello

这是我的第一篇 **Docusaurus 文档**！
```

你也可以在 `sidebars.js` 中显式配置侧边栏：

```js title="sidebars.js"
export default {
  tutorialSidebar: [
    'intro',
    // highlight-next-line
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
};
```
