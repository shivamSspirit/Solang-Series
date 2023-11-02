import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { useRouter } from "next/router";
import fs from "fs/promises";

const postsDirectory = path.join(
  process.cwd(),
  // "modules/module-0/docs/module-0-a"
  "modules/module-0"
);

const basePath = path.join("modules");

export async function getSortedPostsData(modNum=0) {
  const modules = await fs.readdir(basePath);
  let filesofmodules = [];
  let filepathname = [];
  let allmodules = [];

  for (const module of modules) {
    const modulePath = path.join(basePath, module);
    allmodules = [...allmodules, modulePath];

    if ((await fs.stat(modulePath)).isDirectory()) {
      // const docPath = path.join(modulePath, "docs");
      const docPath = path.join(modulePath);
      const docFolders = await fs.readdir(docPath);

      for (const docFolder of docFolders) {
        const docFolderPath = path.join(docPath, docFolder);
        const filePathnames = path.join(process.cwd(), docFolderPath);
        filepathname = [...filepathname, filePathnames];
        const filenamessss = await fs.readdir(filePathnames);
        filesofmodules = [...filesofmodules, filenamessss];
      }
    }
  }

  console.log("filesofmodules", filesofmodules);
  console.log("filepathanme", filepathname);

  // console.log("allmodule", allmodules);

  // const fileNames = await fs.readdir(postsDirectory);

  const allPostsData = filesofmodules[modNum]?.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(filepathname[modNum], fileName);
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    if (matterResult.data) {
      return {
        id,
        ...matterResult.data,
      };
    }
  });
  const allPosts = await Promise.all(allPostsData);
  // console.log("allpost data",allPosts)
  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (a.author < b.author) {
      return 1;
    } else {
      return -1;
    }
  });
}



export async function getAllPostIds() {
  const fileNames = await fs.readdir(postsDirectory);
  //console.log("filenames",fileNames)

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
        Id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = await fs.readFile(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getModules() {
  const modules = await fs.readdir(basePath);
  let allmodules = [];
  for (const module of modules) {
    const modulePath = path.join(basePath, module);
    allmodules = [...allmodules, modulePath];
  }
  return allmodules;
}

export async function getAllfilesIds(modulenumber) {

  const allFilesrelatedtomodulenumber = getSingleModuleInfo(modulenumber);
  console.log("allFilesrelatedtomodulenumber",allFilesrelatedtomodulenumber)

  const fileNames = await fs.readdir(postsDirectory);
  //console.log("filenames",fileNames)



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
        Id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getSingleModuleInfo(ModuleNumber) {
  let allFilesofSingleModule = [];
  const pathOfModuleNumber = path.join("modules", ModuleNumber)
  if ((await fs.stat(pathOfModuleNumber)).isDirectory()) {
    // const docPath = path.join(pathOfModuleNumber, "docs");
    const docPath = path.join(pathOfModuleNumber);
    const docFolders = await fs.readdir(docPath);

    for (const docFolder of docFolders) {
      const docFolderPath = path.join(docPath, docFolder);

      console.log("docFolderpath", docFolderPath);
      const filePathnames = path.join(process.cwd(), docFolderPath);
      // filepathname=[...filepathname,filePathnames]
      const filenamessss = await fs.readdir(filePathnames);
      allFilesofSingleModule = [...allFilesofSingleModule, filenamessss];
      // filesofmodules=[...filesofmodules,filenamessss]
    }
  }

  return {'modulepart-a':allFilesofSingleModule[0],'modulepart-b':allFilesofSingleModule[1]}
}

// mdfiletoberead (this is all files of like this  (module-0-part-a)
// full path of file where it is located

export async function getCourseDataForSingleModulePart(
  mdfiletoberead,
  moduleNumber,
  modulepart
) {
  const allPostsData = mdfiletoberead?.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(
      "modules",
      moduleNumber,
      // "docs",
      modulepart,
      fileName
    );
    const fileContents = await fs.readFile(fullPath, "utf8");
    const matterResult = matter(fileContents);
    if (matterResult.data) {
      return {
        id,
        ...matterResult.data,
      };
    }
  });
  const allPosts = await Promise.all(allPostsData);
  // console.log("allpost data",allPosts)
  // Sort posts by date
  return allPosts.sort((a, b) => {
    if (a.author < b.author) {
      return 1;
    } else {
      return -1;
    }
  });
}
