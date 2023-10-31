import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { useRouter } from "next/router";
let fs;
if (typeof window === 'undefined') {
  fs = require('fs');
}
 async function readAndLogFile() {
   try {
     const data = await fs.readFile('modules/module-0/docs/module-0-a/course-guide.md', 'utf8');
     console.log(data);
   } catch (error) {
     console.error(error);
   }
 }
 
 readAndLogFile();


//const postsDirectory = path.join(process.cwd(), 'modules/module-0/docs/module-0-a');
//console.log("postsdrectory:",postsDirectory);


 const basePath = path.join(process.cwd(), 'modules');
// // const basePath = path.join(process.cwd(), 'modules');
 console.log("basepath",basePath);



 async function readAndParseFiles(basePath) {
   try {
// //fs.readdir

    const modules = await fs.readdirSync(basePath)

//     // const modules = await fs.readdir(basePath);

    for (const module of modules) {
      const modulePath = path.join(basePath, module);
      if ((await fs.stat(modulePath)).isDirectory()) {
        const docPath = path.join(modulePath, 'docs');
        const docFolders = await fs.readdir(docPath);

        for (const docFolder of docFolders) {
          const docFolderPath = path.join(docPath, docFolder);
          // const filePath = path.join(docFolderPath, 'file.md');

          console.log("docspfilder",docFolderPath)
//           // try {
//           //   const content = await fs.readFile(filePath, 'utf-8');
//           //   // Here, you can parse and process the content of file.md as needed.
//           //   console.log(`Content of ${filePath}:`);
//           //   console.log(content);
//           // } catch (err) {
//           //   console.error(`Error reading ${filePath}: ${err}`);
//           // }
         }
      }
   }
  } catch (err) {
    console.error(`Error accessing directory structure: ${err}`);
   }
 }





export async function getSortedPostsData() {
  // Get file names under /posts

  const modf = await readAndParseFiles(basePath);
  console.log("modf",modf)

//   //const fileNames = await fs.readdir(postsDirectory);
//   // const allPostsData = fileNames.map((fileName) => {
//   //   // Remove ".md" from file name to get id
//   //   const id = fileName.replace(/\.md$/, '');

//   //   // Read markdown file as string
//   //   const fullPath = path.join(postsDirectory, fileName);
//   //   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   //   // Use gray-matter to parse the post metadata section
//   //   const matterResult = matter(fileContents);

//   //   // Combine the data with the id
//   //   return {
//   //     id,
//   //     ...matterResult.data,
//   //   };
//   // });


//   // // Sort posts by date
//   // return allPostsData.sort((a, b) => {
//   //   if (a.author < b.author) {
//   //     return 1;
//   //   } else {
//   //     return -1;
//   //   }
//   // });

 }



//   // const allPostsData = fileNames.map((fileName) => {
//   //   // Remove ".md" from file name to get id
//   //   const id = fileName.replace(/\.md$/, '');

//   //   // Read markdown file as string
//   //   const fullPath = path.join(postsDirectory, fileName);
//   //   const fileContents = fs.readFileSync(fullPath, 'utf8');

//   //   // Use gray-matter to parse the post metadata section
//   //   const matterResult = matter(fileContents);

//   //   console.log("datass", { id,
//   //       ...matterResult.data})
//   //   // Combine the data with the id
//   //   return {
//   //     id,
//   //     ...matterResult.data,
//   //   };
//   // });
//   // // Sort posts by date
//   // return allPostsData.sort((a, b) => {
//   //   if (a.author < b.author) {
//   //     return 1;
//   //   } else {
//   //     return -1;
//   //   }
//   // });
// //}



// export async function getAllPostIds() {
//     const fileNames = fs.readdirSync(postsDirectory);
//     console.log("filenames",fileNames)
  
//     // Returns an array that looks like this:
//     // [
//     //   {
//     //     params: {
//     //       id: 'ssg-ssr'
//     //     }
//     //   },
//     //   {
//     //     params: {
//     //       id: 'pre-rendering'
//     //     }
//     //   }
//     // ]

//     return fileNames.map((fileName) => {
//       return {
//         params: {
//           Id: fileName.replace(/\.md$/, ''),
//         },
//       };
//     });
//   }


//   export async function getPostData(id) {
//     const fullPath = path.join(postsDirectory, `${id}.md`);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');
  
//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);
  
//     // Use remark to convert markdown into HTML string
//     const processedContent = await remark()
//       .use(html)
//       .process(matterResult.content);
//     const contentHtml = processedContent.toString();
  

//     console.log("perpostData",{ id,
//         contentHtml,
//         ...matterResult.data})
//     // Combine the data with the id and contentHtml
//     return {
//       id,
//       contentHtml,
//       ...matterResult.data,
//     };
//   }