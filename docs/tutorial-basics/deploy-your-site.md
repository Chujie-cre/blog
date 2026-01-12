---
sidebar_position: 5
---

# 部署你的站点

Docusaurus 是一个 **静态站点生成器**（也称 **[Jamstack](https://jamstack.org/)**）。

它会把站点构建为纯粹的 **静态 HTML / JavaScript / CSS 文件**。

## 构建站点

执行生产环境构建：

```bash
npm run build
```

静态资源会输出到 `build` 目录。

## 部署站点

先在本地验证构建结果：

```bash
npm run serve
```

现在 `build` 文件夹会托管在 [http://localhost:3000/](http://localhost:3000/)。

之后你可以将 `build` 目录**部署到几乎任何静态托管服务**，通常免费或成本极低（详见 **[部署指南](https://docusaurus.io/docs/deployment)**）。
