module.exports = [
  { text: 'Home', link: '/' },
  {
    text: "About",
    items: [
      { text: 'About', link: '/about/' },
    ]
  },
  {
    text: '侧边栏',
    items: [
      { text: 'Vue', link: '/vue/' },
      { text: 'Javascript', link: '/javascript/' }
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
]