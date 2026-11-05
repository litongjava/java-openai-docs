import { defineUserConfig } from "vuepress/cli";
import { viteBundler } from "@vuepress/bundler-vite";
import { defaultTheme } from "@vuepress/theme-default";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import { seoPlugin } from "@vuepress/plugin-seo";
import { sitemapPlugin } from "@vuepress/plugin-sitemap";
import sidebar from "./sidebar.json" with { type: "json" };

const hostname = "https://java-openai.io.nexus";

export default defineUserConfig({
  base: "/",
  lang: "zh-CN",
  title: "java-openai",
  description: "java-openai 使用文档：统一调用大模型、流式响应、多模态与语音接口",
  shouldPrefetch: false,
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  markdown: { lineNumbers: true },
  bundler: viteBundler(),
  plugins: [
    searchProPlugin({ indexContent: true }),
    seoPlugin({ hostname, author: { name: "Tong Li", url: "https://github.com/litongjava" } }),
    sitemapPlugin({ hostname }),
  ],
  theme: defaultTheme({
    logo: "/logo.png",
    repo: "litongjava/java-openai-docs",
    docsRepo: "https://github.com/litongjava/java-openai-docs",
    docsBranch: "main",
    docsDir: "docs",
    navbar: [
      { text: "源码", link: "https://github.com/litongjava/java-openai" },
      { text: "Tio Boot", link: "https://tio-boot.com/" },
    ],
    sidebar,
  }),
});
