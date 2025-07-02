import { defineConfig, HeadConfig, PageData, createContentLoader } from 'vitepress'
import { SitemapStream } from 'sitemap'
import { createWriteStream } from 'node:fs'
import { resolve } from 'node:path'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'keywords', content: 'clash for android,clash for windows,clash下载,clash配置,openclash,clash官网,shadowrocket,小火箭,v2rayng,v2rayn,clash中文网'}],
    ['script', { 
      async: true, 
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2394457707130437',
      crossorigin: 'anonymous'
    }]
  ],
  title: "Clash for Windows",
  //keywords: "Clash",
  description: "一款基于 Clash 内核的 Windows 平台代理工具，Clash for Windows",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.png',
    nav: [
      { text: '介绍', link: '/about.md' },
      { text: '下载', link: '/download.md' },
      { text: '教程', link: '/tutorial.md' },
      { text: '维基', link: '/wiki/RESTful API' },
      { text: '常见问题', link: '/faq.md' },
      { text: '🎉机场推荐', link: '/feed.md' }
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '介绍', link: '/about.md' },
          { text: '下载', link: '/download.md' },
          { text: '教程', link: '/tutorial.md' }
        ]
      },
      {
        text: '维基',
        items: [
          { text: 'RESTful API', link: '/wiki/RESTful API.md' },
          { text: 'Shadowsocks', link: '/wiki/Shadowsocks.md' },
          { text: 'Snell', link: '/wiki/Snell.md' },
          { text: 'Socks5', link: '/wiki/Socks5.md' },
          { text: 'TCP', link: '/wiki/TCP.md' },
          { text: 'TProxy TCP/UDP', link: '/wiki/TProxy.md' },
          { text: 'Trojan', link: '/wiki/Trojan.md' },
          { text: 'UDP', link: '/wiki/UDP.md' },
          { text: 'VMess', link: '/wiki/VMess.md' },
          { text: 'Wireguard', link: '/wiki/Wireguard.md' }
        ]
      },
      {
        text: '其它问题',
        items: [
          { text: '常见问题', link: '/faq.md' },
          { text: '🎉机场推荐', link: '/feed.md' }
        ]
      }
    ],

    //socialLinks: [
     // { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      // ],
       // 文章翻页
    docFooter: {
     prev: '上一篇',
     next: '下一篇'
    },

      // 移动端 - 外观
    darkModeSwitchLabel: '外观',

      // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

      // 移动端 - menu
    sidebarMenuLabel: '菜单',

    outlineTitle: '本页导航',

    

      // 站点页脚配置
    footer: {
      message: "Clash for Windows,Clash for Windows怎么配置,Clash for Windows官网,Clash for Windows下载",
      copyright: 'Copyright © 2024  <a href="/"> Clash for Windows </a>'
    },

    search: {
      provider: 'local'
    },
  },

  transformPageData(pageData, { siteConfig }) {
    // siteConfig
    const { lang, title, description } = siteConfig.site;

    // is home?
    const isHome = pageData.frontmatter.layout;

    // lastUpdated
    const lastUpdated = pageData.lastUpdated;
    const isoDate = lastUpdated ? new Date(lastUpdated).toISOString() : null;
    //siteUrl
    const siteUrl = 'https://www.clashcn.org';
    // canonical
    const canonicalUrl =
      siteUrl +
      "/" +
      pageData.relativePath.replace(/index\.md$/, "").replace(/\.md$/, ".html");

    pageData.frontmatter.head ??= [];
    pageData.frontmatter.head.push(
      // canonical
      ["link", { rel: "canonical", href: canonicalUrl }],

      // Open Graph
      [
        "meta",
        {
          property: "og:local",
          content: lang,
        },
      ],
      [
        "meta",
        {
          property: "og:type",
          content: isHome === "home" ? "website" : "article",
        },
      ],
      [
        "meta",
        {
          property: "og:title",
          content: isHome === "home" ? title : pageData.title + " | " + title,
        },
      ],
      [
        "meta",
        {
          property: "og:description",
          content:
            isHome === "home" ? description : pageData.frontmatter.description,
        },
      ],
      [
        "meta",
        {
          property: "og:url",
          content: isHome === "home" ? siteUrl + "/" : canonicalUrl,
        },
      ],
      [
        "meta",
        {
          property: "og:site_name",
          content: title,
        },
      ],
      [
        "meta",
        {
          property: "og:image",
          content: siteUrl + "/android-chrome-192x192.png",
        },
      ],
      [
        "meta",
        {
          property: "og:image:width",
          content: "192",
        },
      ],
      [
        "meta",
        {
          property: "og:image:height",
          content: "192",
        },
      ],
      [
        "meta",
        {
          property: "og:image:type",
          content: "image/png",
        },
      ],

      // Twitter
      [
        "meta",
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
      ]
    );

    // 如果isoDate存在，则添加article:modified_time元数据
    if (isoDate) {
      pageData.frontmatter.head.push([
        "meta",
        {
          property: "article:modified_time",
          content: isoDate,
        },
      ]);
    }

    // 添加其他article相关的meta标签
    pageData.frontmatter.head.push(
      [
        "meta",
        {
          name: "author",
          content: title,
        },
      ],
      [
        "meta",
        {
          name: "twitter:label1",
          content: "作者",
        },
      ],
      [
        "meta",
        {
          name: "twitter:data1",
          content: title,
        },
      ]
    );
  },

  cleanUrls: false, // 禁用干净URL，保留.html后缀
  // 生成网站地图
  sitemap: {
    hostname: 'https://clashcn.org'
  }
})
