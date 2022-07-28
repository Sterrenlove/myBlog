const sidebar = {
  "/pages/vim/": [
    {
      text: "Vim",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/vim/" },
        { text: "认识Vim", link: "/pages/vim/knowVim" },
        { text: "行相关命令", link: "/pages/vim/commandLine" },
        { text: "语法", link: "/pages/vim/grammar" },
      ],
    },
  ],
  "/pages/learning/": [
    {
      text: "学习笔记",
      collapsible: true,
      items: [
        // This shows `/learning/index.md` page.
        // { text: "Index", link: "/pages/learning/" },
        { text: "HTML", link: "/pages/learning/html" },
        { text: "JS", link: "/pages/learning/js" },
        { text: "VUE", link: "/pages/learning/vue" },
      ],
    },
  ],
};

export default sidebar;
