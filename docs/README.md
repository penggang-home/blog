---
home: true
# heroImage: /hero.png
# 标题
heroText: Hero 标题
# 副标题
tagline: Hero 副标题
# 绿色按钮文字
actionText: 快速上手 →
# 绿色按钮链接
actionLink: /zh/guide/
title: 首页

features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

# Hello VuePress!

<!-- 引入图片 / 就是 .vuepress下 -->

<img class="custom-zoom" :src="$withBase('/images/logo.png')" alt="foo">

![logo](/images/logo.png)

:::tip  VueX
VueX 是 Vue的装填管理系统
:::

<count-up :endValue="2020"/>

::: danger DANGER
danger
:::

:::warning warning
warning
:::

::: details 点击查看代码
  ```js
  console.log(this)
  ```
:::


```js {4-10}
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
console.log(1)
```


<Vssue :title="$title"/>