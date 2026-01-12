---
sidebar_position: 1
---

# 创建一个页面

向 `src/pages` 添加 **Markdown 或 React 文件**，即可快速创建**独立页面**：

- `src/pages/index.js` → `localhost:3000/`
- `src/pages/foo.md` → `localhost:3000/foo`
- `src/pages/foo/bar.js` → `localhost:3000/foo/bar`

## 创建第一个 React 页面

在 `src/pages/my-react-page.js` 新建文件：

```jsx title="src/pages/my-react-page.js"
import React from 'react';
import Layout from '@theme/Layout';

export default function MyReactPage() {
  return (
    <Layout>
      <h1>我的 React 页面</h1>
      <p>这是一个 React 页面</p>
    </Layout>
  );
}
```

现在可以在 [http://localhost:3000/my-react-page](http://localhost:3000/my-react-page) 访问这个页面。

## 创建第一个 Markdown 页面

在 `src/pages/my-markdown-page.md` 新建文件：

```mdx title="src/pages/my-markdown-page.md"
# 我的 Markdown 页面

这是一个 Markdown 页面
```

访问 [http://localhost:3000/my-markdown-page](http://localhost:3000/my-markdown-page) 即可查看。
