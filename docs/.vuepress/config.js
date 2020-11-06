const moment = require('moment');
moment.locale("zh-cn") //显示中国的时间格式


module.exports = {
  // SEO Start
  base:'/blog/',
  // 网页的 title和左上角 绑定此处的值
  title: '彭先生的主页',
  // 描述
  description: '彭先生的主页',
  head: [
    // 关键词
    ['meta', { name: 'Keywords', content: '彭先生的主页,彭先生的VuePress' }],
    // 作者
    ['meta', { name: 'author', content: '彭先生' }],
    ['link', { rel: 'icon', href: 'https://cn.vuejs.org/images/logo.png' }],
  ],

  // SEO End

  // 默认打包到docs下的 dist目录 这里手动改成打包的 当前目录下的 dist下
  // dest: './dist',

  // 端口
  port: '1920',

  themeConfig: {
    // 最后更新时间
    lastUpdated: '更新时间', // string | boolean

    // 禁用导航栏
    // navbar: false,

    logo: '/assets/img/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      {
        text: '侧边栏',
        items: [
          { text: 'Vue', link: '/vue/vue-x/' },
          { text: 'Javascript', link: '/javascript/vue.html#_1-3-vue-router' }
        ]
      },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      {
        text: '学习',
        items: [
          {
            text: '前端',
            items: [
              { text: 'Vue', link: '/' },
              { text: 'React', link: '/guide/' },
              { text: 'Angular', link: 'https://google.com' },
            ]
          },
          {
            text: '后端',
            items: [
              { text: 'Java', link: '/' },
              { text: 'PHP', link: '/guide/' },
              { text: 'Node', link: 'https://google.com' },
            ]
          }
        ]
      },
    ],
    // 数组形式
    // sidebar: [
    // '/',
    // '/about/',
    // '/about/copyright',
    // {
    //   title: '分组一',   // 必要的
    //   path: '/Vue/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
    //   collapsable: true, // 是否折叠 可选的, 默认值是 true,
    //   sidebarDepth: 2,    // 可选的, 默认值是 1
    //   children: [
    //     '/vue/vue-cli',
    //     '/vue/vue-router',
    //     '/vue/vue-x',
    //   ]
    // },
    // ]
    // 对象形式
    sidebar: {
      '/vue/': [
        '/vue/vue-cli',
        '/vue/vue-router',
        '/vue/vue-x',
      ],
      '/javascript/': [
        'vue',
        'react',
        'angular',
      ],
      // 越短的放在月后边 没效果
      // '/':[
      //   ''
      // ]
    },

  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          return moment(timestamp).format('LLLL')
        }
      }
    ]
  ]
}