import fs from "fs/promises";
import path from 'path';


const basePath = path.join('modules');

export async function getModules() {
  const modules = await fs.readdir(basePath);
  let allmodulespath = [];
  for (const module of modules) {
    const modulePath = path.join(basePath, module);
    allmodulespath = [...allmodulespath, modulePath];
  }
  return allmodulespath;
}

