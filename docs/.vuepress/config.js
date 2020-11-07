const headConfig = require('./config/head')
const navConfig = require('./config/nav')
const sidebarConfig = require('./config/sidebar')
const pluginsConfig = require('./config/plugins')

module.exports = {
  // SEO Start
  base: '/blog/',
  // 网页的 title和左上角 绑定此处的值
  title: '彭先生的主页',
  // 描述
  description: '彭先生的主页',

  head: headConfig,

  // SEO End

  // 默认打包到docs下的 dist目录 这里手动改成打包的 当前目录下的 dist下
  // dest: './dist',

  markdown: {
    // 代码块是否显示行号
    lineNumbers: true,
  },

  // 端口
  port: '1920',

  themeConfig: {
    // 最后更新时间
    lastUpdated: '更新时间', // string | boolean

    // 禁用导航栏
    // navbar: false,

    // 显示所有侧边栏
    displayAllHeaders: true, // 默认值：false

    logo: '/assets/img/logo.png',

    nav: navConfig,
    // 对象形式
    // sidebar: sidebarConfig,

  },
  plugins: pluginsConfig
}