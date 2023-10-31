import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { useRouter } from "next/router";
let fs;
if (typeof window === 'undefined') {
  fs = require('fs');
}
//import fs from 'fs/promises';

const postsDirectory = path.join(process.cwd(), 'modules/module-0/docs/module-0-a');
console.log("postsdrectory:",postsDirectory);


 const basePath = path.join(process.cwd(), 'modules');
// // const basePath = path.join(process.cwd(), 'modules');
 //console.log("basepath",basePath);

export async function getSortedPostsData() {
  // Get file names under /posts
const modules = fs.readdirSync(basePath)
  console.log("hellossss",modules)
 
  
  // const modf = await readAndParseFiles(basePath);
  // console.log("modf",modf)

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.author < b.author) {
      return 1;
    } else {
      return -1;
    }
  });

 }


export async function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory);
    console.log("filenames",fileNames)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    return fileNames.map((fileName) => {
      return {
        params: {
          Id: fileName.replace(/\.md$/, ''),
        },
      };
    });
  }


  export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html)
      .process(matterResult.content);
    const contentHtml = processedContent.toString();
  

    console.log("perpostData",{ id,
        contentHtml,
        ...matterResult.data})
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  }