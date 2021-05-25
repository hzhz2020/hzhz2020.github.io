module.exports = {
  title: "Tufts University",
  description: "The description of the site.",
  head: [["link", { rel: "icon", href: `/logo.png` }]],
  base: "/",
  dest: "./docs",

  themeConfig: {
    search: false,
    nav: [
      { text: "Home", link: "/" },
      // { text: "About", link: "/about/" },
      // { text: "Projects", link: "/projects/" },
      // { text: "Guide", link: "/guide/" },
      { text: "EchoForAS-18-18", link: "/EchoForAS-18-18/"},
      { text: "EchoForAS-156-52", link: "/EchoForAS-156-52/"}
    ],
    sidebar: {
      '/guide/': [
        '',   /* README */
        'advanced',
        'customize',
        'getting-started'
      ],
      '/EchoForAS-18-18/': [
        '',   /* README */
        // 'data_description',
      ],
      '/EchoForAS-156-52/':[
        '', /* README */
        // 'data_description',
      ]
    },
    displayAllHeaders: true,
    
    // lastUpdated: 'Last Updated',

    plugins: [
      'latex'
    ]
  },

  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },
    extendMarkdown: md => {
      md.use(require("markdown-it-katex"));
    }
  }
};

// function genSidebarConfig (title) {
//   return [
//     {
//       title,
//       collapsable: false,
//       children: [
//         '',
//         'getting-started',
//         'customize',
//         'advanced',
//       ]
//     }
//   ]
// }

