"use client";

import dynamic from "next/dynamic";
import "imput-cms/dist/index.css";
import { components } from "app/(site)/components/mdx";

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
          base_url: "https://imput-blog-template.vercel.app",
          auth_endpoint: "api/authorize",
        },
        media_folder: "public/uploads",
        public_folder: "/uploads",
        collections: [
          {
            name: "blog",
            label: "Blog",
            folder: "app/(site)/blog/posts",
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
            preview: {
              styles: ["/css/global.css"],
              components,
              wrapper: ({ children }) => (
                <div className="prose">{children}</div>
              ),
            },
            blocks: [
              {
                name: "Table",
                label: "Table",
                fields: [
                  {
                    label: "Data",
                    name: "data",
                    type: {
                      widget: "json",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    }}
  />
);

export default CMS;
