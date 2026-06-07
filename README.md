# look look your web

> 一个基于 Cloudflare Workers 和 Cloudflare Pages 的网站实时检测工具

## 目录结构

```
looklookyourweb/
├── worker.js          # Cloudflare Worker 后端（API）
├── wrangler.toml      # Worker 配置
├── public/            # 前端页面（部署到 Cloudflare Pages）
│   ├── index.html
│   ├── app.js
│   └── style.css
└── README.md
```

## 部署

- **后端（Worker）**：`wrangler deploy`
- **前端（Pages）**：将 `public/` 目录部署到 Cloudflare Pages

部署教程：[前往查看](https://lm-xiao-fen.github.io/tech/2026-04-05-%E7%9C%8B%E7%9C%8B%E7%BD%91%E7%AB%99%E6%8C%82%E6%B2%A1%E6%9C%89%E5%B0%B1%E4%BA%A4%E7%BB%99cf-worker%E5%90%A7/)

## 注意：本项目采用 vibe coding 制作，如需使用这是不可忽视的一点
