module.exports = {
  title: "Sumind's Blog",
  description: '做一个有灵魂的前端工程师',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    nav: [
      { text: '首页', link: '/', icon: 'reco-home' },
      { text: '时间轴', link: '/timeLine/', icon: 'reco-date' },
      { text: '关于我', link: '/about/',icon: 'reco-account'}
    ],
    // 博客设置
    blogConfig: {
      category: 
      {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: 'Blog'
         // 默认 “分类”
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: '生活' // 默认 “标签”
      }
    },


    logo: '/01.jpg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'Sumind',
    // 备案号
    // record: 'xxxx',
    // 项目开始时间
    startYear: '2017',
    /**
     * 密钥 (if your blog is private)
     */

    // keyPage: {
    //   keys: ['your password'],
    //   color: '#42b983',
    //   lineColor: '#42b983'
    // },

    /**
     * valine 设置 (if you need valine comment )
     */

    // valineConfig: {
    //   appId: '...',// your appId
    //   appKey: '...', // your appKey
    // }
    huawei:false,
   
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}  