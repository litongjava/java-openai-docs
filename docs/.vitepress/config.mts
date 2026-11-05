import { defineConfig } from "vitepress";
import sidebar from "./sidebar.json";

export default defineConfig({
  lang: "zh-CN",
  title: "java-openai",
  description: "java-openai 使用文档：统一调用大模型、流式响应、多模态与语音接口",
  cleanUrls: true,
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  sitemap: { hostname: "https://java-openai.io.nexus" },
  markdown: { lineNumbers: true },
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "源码", link: "https://github.com/litongjava/java-openai" },
      { text: "全部项目", link: "https://io.nexus/projects" },
      { text: "Tio Boot", link: "https://tio-boot.com/" },
    ],
    sidebar,
    socialLinks: [{ icon: "github", link: "https://github.com/litongjava/java-openai-docs" }],
    search: { provider: "local" },
    editLink: {
      pattern: "https://github.com/litongjava/java-openai-docs/edit/main/docs/:path",
      text: "编辑此页",
    },
    outline: { level: [2, 3], label: "本页目录" },
    docFooter: { prev: "上一页", next: "下一页" },
    lastUpdated: { text: "最后更新" },
  },
});
