"use client";

import { BlockType } from "imput-cms";
import dynamic from "next/dynamic";
import "../../../(site)/global.css";
import "imput-cms/dist/index.css";

const NextCMS = dynamic(() => import("imput-cms"), {
  ssr: false,
});

const CMS = () => (
  <NextCMS
    {...{
      settings: {
        backend: {
          name: "github",
          repo: "leo-petrucci/imput-blog-template",
          branch: "main",
          base_url:
            process.env.NODE_ENV === "production"
              ? "https://www.imput.computer"
              : "http://localhost:3000/",
          auth_endpoint: "api/authorize",
        },
        media_folder: "public/uploads",
        public_folder: "/uploads",
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "app/blog/posts",
            create: true,
            slug: "{{name}}",
            extension: "mdx",
            orderBy: {
              value: "publishedAt",
              direction: "asc",
            },
            fields: [
              {
                label: "Title",
                name: "title",
                widget: "string",
                rules: {
                  required: "This field is required",
                },
              },
              {
                label: "Published At",
                name: "publishedAt",
                widget: "date",
                rules: {
                  required: "This field is required",
                },
              },
              {
                label: "Summary",
                name: "summary",
                widget: "string",
              },
              { label: "Content", name: "body", widget: "markdown" },
            ],
            blocks: [],
          },
        ],
      },
    }}
  />
);

export default CMS;
