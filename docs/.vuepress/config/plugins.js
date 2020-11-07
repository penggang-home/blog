const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式

module.exports = {
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      return moment(timestamp).format('LLLL')
    }
  },
  '@vssue/vuepress-plugin-vssue': {
    // 设置 `platform` 而不是 `api`
    platform: 'github',

    // 其他的 Vssue 配置
    owner: 'penggang-home', // 仓库的拥有者的名称
    repo: 'blog', // 存储 Issue 和评论的仓库的名称
    clientId: 'ac65182c6d2c00d779c9',
    clientSecret: '57131e3f95e8f345cfec32499af56f7179a8a765',
    autoCreateIssue: true, // 自动创建评论
  },
  '@vuepress/back-to-top': true,
  // 图片缩放插件
  '@vuepress/medium-zoom': {
    // 指定类缩放
    selector: 'img.custom-zoom',
  },
  // vuepress 自动生成侧边栏
  "vuepress-plugin-auto-sidebar": {}
}