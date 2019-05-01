const _ = require('lodash')
const fs = require('fs')
const path = require('path')

const makeDir = (d: string) => {
    // 中间件树
    let tree: any = {}
    
    const [dirs, files] = _(fs.readdirSync(d)).partition((p: any) => fs.statSync(path.join(d, p)).isDirectory())

    // 遍历文件夹
    dirs.forEach((dir: string) => {
        tree[dir] = makeDir(path.join(d, dir))
    })
    // 遍历文件
    files.forEach((file: any) => {
        if (path.extname(file) === '.ts') {
            tree[path.basename(file, '.ts')] = require(path.join(d, file)) 
        }
    })
    return tree
}
// 导出公用遍历方法
export default makeDir
