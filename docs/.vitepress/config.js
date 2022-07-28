import nav from "./nav";
import sidebar from "./sidebar";
module.exports = {
  // 网站标题
  title: '小萝卜',
  // 网站描述
  description: '小萝卜成长之路',
  // 打包目录
  dest: './dist',
  // head: [
  //     // 添加图标
  //     ['link', { rel: 'icon', href: '/favicon.ico' }]
  // ],
  // 主题配置
  themeConfig: {
    // siteTitle: "mayunlongtx",
    outlineTitle: "目录",
    smoothScroll:true,
    // logo: "/public/logo.jpg",
    footer: {
      copyright: "@xiaoluobo-学习笔记",
    },
    // 跳转一个编辑地址
    // editLink: {
    //   pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
    //   text: "Edit this page on GitHub",
    // },
    // siteTitle: false,
    // lastUpdated: true,
    lastUpdatedText: "最后更新", // 最后更新时间文本, 需配置 lastUpdated 为 true
    // carbonAds: {
    //   code: "your-carbon-code",
    //   placement: "your-carbon-placement",
    // },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    nav,
    socialLinks: [
      { icon: "github", link: "https://github.com/Sterrenlove/myBlog.git" },
    ],
    sidebar,
  },
  // 使用插件
  plugins:[
    '@vuepress/active-header-links',   // 页面滚动时自动激活侧边栏链接的插件
    '@vuepress/back-to-top',          // 返回顶部插件
    '@vuepress/medium-zoom',          // 图片预览插件
    '@vuepress/nprogress',        //页面顶部进度条
  ]
}