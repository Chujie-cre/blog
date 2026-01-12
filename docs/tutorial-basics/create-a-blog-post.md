---
sidebar_position: 3
---

# 创建一篇博客文章

Docusaurus 会为每篇博客文章生成一个**独立页面**，同时提供**博客索引页**、**标签系统**、**RSS** 订阅等完整功能。

## 创建第一篇文章

在 `blog/2021-02-28-greetings.md` 新建一个文件：

```md title="blog/2021-02-28-greetings.md"
---
slug: greetings
title: Greetings!
authors:
  - name: Joel Marcey
    title: Co-creator of Docusaurus 1
    url: https://github.com/JoelMarcey
    image_url: https://github.com/JoelMarcey.png
  - name: Sébastien Lorber
    title: Docusaurus maintainer
    url: https://sebastienlorber.com
    image_url: https://github.com/slorber.png
tags: [greetings]
---

恭喜！你的第一篇文章已经完成。

可以随意修改、尝试不同内容。
```

现在，你可以在 [http://localhost:3000/blog/greetings](http://localhost:3000/blog/greetings) 访问它。
