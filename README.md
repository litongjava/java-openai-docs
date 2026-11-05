# java-openai-docs

java-openai 使用文档：统一调用大模型、流式响应、多模态与语音接口。

- 文档站：https://java-openai.io.nexus/
- 项目源码：https://github.com/litongjava/java-openai
- 拆分自 [tio-boot-docs](https://github.com/litongjava/tio-boot-docs)

## 本地开发

```bash
pnpm install
pnpm docs:dev
```

## 构建

```bash
pnpm docs:build
```

构建产物位于 `docs/.vitepress/dist`。

## 部署

推送到 `main` 分支后，Cloudflare Pages 会自动构建并发布。

## AI 语料

构建时生成，供 AI 检索和问答使用：

- [llms.txt](https://java-openai.io.nexus/llms.txt)：页面目录
- [llms-full.txt](https://java-openai.io.nexus/llms-full.txt)：完整正文
- [ai/index.json](https://java-openai.io.nexus/ai/index.json)：页面元数据
- [ai/chunks.jsonl](https://java-openai.io.nexus/ai/chunks.jsonl)：按标题分段的语料
- `/ai/pages/<路径>.md`：每页的 Markdown 原文
