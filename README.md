# Portfolio Blog Starter with Imput CMS

This is a porfolio site template complete with a blog. Includes:

- MDX and Markdown support
- Imput: a git-based CMS
- Optimized for SEO (sitemap, robots, JSON-LD schema)
- RSS Feed
- Dynamic OG images
- Syntax highlighting
- Tailwind v3
- Vercel Speed Insights / Web Analytics
- Geist font

This repo is a fork of [Leerob's Portfolio blog starter](https://github.com/vercel/examples/tree/main/solutions/blog) with the addition of [`imput-cms`](https://www.imput.computer/) as an admin interface.

## Demo

https://portfolio-blog-starter.vercel.app

## How to Use

Fork the repo on Github with [this link](https://github.com/leo-petrucci/imput-blog-template/fork)

Clone it.

```sh
git clone git@github.com:leo-petrucci/imput-blog-template.git
```

Change Imput's [`repo` config](<https://github.com/leo-petrucci/imput-blog-template/blob/main/app/(imput)/admin/%5B%5B...cms%5D%5D/page.tsx#L18>).

```diff
backend: {
    name: "github",
-    repo: "leo-petrucci/imput-blog-template",
+    repo: "<your username>/<the repo name you created when forking>",
    branch: "main",
    base_url: "http://localhost:3000/",
    auth_endpoint: "api/authorize",
},
media_folder: "public/uploads",
public_folder: "/uploads",
```

Generate your [Github id and secret](https://www.imput.computer/docs/quick-start/choosing-your-backend#getting-your-oauth-secrets).

Install it.

```sh
pnpm install
# or
npm install
```

Run it.

```sh
pnpm dev
# or
npm run dev
```

## How to deploy it

To use this in production you'll have to change the [`baseUrl` config](<https://github.com/leo-petrucci/imput-blog-template/blob/main/app/(imput)/admin/%5B%5B...cms%5D%5D/page.tsx#L20>) to the domain you plan to use in production.

```diff
backend: {
    name: "github",
    repo: "leo-petrucci/imput-blog-template",
    branch: "main",
-   base_url: "http://localhost:3000/",
+   base_url: "<your domain>",
    auth_endpoint: "api/authorize",
},
media_folder: "public/uploads",
public_folder: "/uploads",
```

You'll also have to generate a new [Github id and secret](https://www.imput.computer/docs/quick-start/choosing-your-backend#getting-your-oauth-secrets) for prod.
