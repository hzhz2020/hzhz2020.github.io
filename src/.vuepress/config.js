module.exports = {
  title: "Echo dataset",
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
      { text: "Dataset", link: "/data/"}
    ],
    sidebar: {
      '/guide/': [
        '',   /* README */
        'advanced',
        'customize',
        'getting-started'
      ],
      '/data/': [
        '',   /* README */
        'data_description'
      ]
    },
    displayAllHeaders: true,
    
    lastUpdated: 'Last Updated',

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

