import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

// import rehypeToc from "@jsdevtools/rehype-toc";


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  headings: {
    type: "json",
    resolve: async (doc) => {
      const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
      const slugger = new GithubSlugger();
      const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
        ({ groups }) => {
          const flag = groups?.flag;
          const content = groups?.content;
          return {
            level:
              flag.length == 1 ? "one" : flag.length == 2 ? "two" : "three",
            text: content,
            slug: content ? slugger.slug(content) : undefined,
          };
        }
      );
      return headings;
    },
  },

  // toc: {
  //   type: "json",
  //   resolve: async (doc) => {
  //     const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  //     const headingsArr = Array;
  //     return true;
  //   },
  // },
};

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `**/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    author: {
      type: "string",
    },
    moduleNumber: {
      type: "string",
    },
    modulePart: {
      type: "string",
    },
    thisFileName: {
      type: "string",
    },
    orderNumber: {
      type: "string",
    },
    modulePartDescription: {
      type: "string",
    },
  },

  computedFields,
}));


export default makeSource({
  contentDirPath: "modules",
  documentTypes: [Doc],
  md: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ["anchor"],
          },
        },
      ],
    ],
  },
});
