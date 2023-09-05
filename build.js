import pkg from 'gulp';
import path from "path"
import { fileURLToPath } from 'url';
import run from './run.js'
const { series } = pkg;

// 文件路径
const __filename = fileURLToPath(import.meta.url);
// 文件夹路径
const __dirname = path.dirname(__filename);

// 任务一
const add = () => {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      console.log(123)
      resolve()
    }, 2000)
  })
}

// 任务一
const bbb = async () => {
  run("develop.bat", path.resolve(__dirname, "./"))
}

// 任务三
const ccc = () => {
  return new Promise((resolve)=> {
    setTimeout(()=> {
      console.log(789)
      resolve()
    }, 2000)
  })
}

export default series(add, bbb, ccc)
