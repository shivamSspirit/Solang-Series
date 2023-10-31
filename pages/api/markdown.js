import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import fs from 'fs/promises';
import { dir } from 'console';

const basePath = path.join(process.cwd(), 'modules');
console.log("base abth", basePath)
export default async (req, res) => {
   // const dataDirectory = path.join(process.cwd(), 'markdownData');
    const modules =await fs.readdir(basePath);
    console.log("modulesss",modules)
    let docFolderPath;

    for (const module of modules){
        const modulePath = path.join(basePath, module);
        console.log("modulepath",modulePath)
       const moduleStat = await fs.stat(modulePath);
       console.log("vvvvvv",moduleStat.isDirectory());


       if (moduleStat.isDirectory()) {
        const docPath = path.join(modulePath, 'doc');
        const docFolders = await fs.readdir(docPath);

        for (const docFolder of docFolders) {
           docFolderPath =[...docFolderPath,path.join(docPath, docFolder)];
         
        
         // const filePath = path.join(docFolderPath, 'file.md');

        //   try {
        //     const content = await fs.readFile(filePath, 'utf-8');
        //     // Here, you can parse and process the content of file.md as needed.
        //     console.log(`Content of ${filePath}:`);
        //     console.log(content);
        //   } catch (err) {
        //     console.error(`Error reading ${filePath}: ${err}`);
        //   }
        }
        console.log("docfolderpath",docFolderPath)

      }
      }

      res.status(200).json({ content: docFolderPath });

//     const fileNames = fs.readdirSync(postsDirectory);
//   const allPostsData = fileNames.map((fileName) => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '');

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName);
//     const fileContents = fs.readFileSync(fullPath, 'utf8');

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents);

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data,
//     }
//});
  
    // try {
    //   const markdownContent = await fs.readFile(filePath, 'utf-8');
    //   const parsedContent = await remark().use(remarkHTML).process(markdownContent);
    //   res.status(200).json({ content: parsedContent.contents });
    // } catch (error) {
    //   console.error(error);
    //   res.status(500).send('Internal Server Error');
    // }
  };


