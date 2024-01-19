import fs from "fs/promises";
import path from 'path';


const basePath = path.join('modules');


export async function getModules() {
  const modules = await fs.readdir(basePath);
  const filteredModules = modules.filter(module => module !== '.DS_Store');
  let allmodulespath = [];
  for (const module of filteredModules) {
    const modulePath = path.join(basePath, module);
    allmodulespath = [...allmodulespath, modulePath];
  }
  return allmodulespath;
}

