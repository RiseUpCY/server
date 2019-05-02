const crypto = require('crypto')
const fs = require('fs')

/**
 * @param type 被检查的类型
 * @param arr 在arr里有无包含type的值
 */
export const hasInArray = (type: [] | string, arr: []): boolean => {
    let res
    if (typeof type === 'string') {
        res = arr.filter(item => {
            return item === type
        }).length
    } else {
        for (let i = 0; i < type.length; i++) {
            res = arr.filter(item => {
                return item === type[i]
            }).length
            if (res) break
        }
    }

    return !!res
}

/** 获取token
 * @param ctx koa上下文
 */
export const getToken = (ctx: any) => {
    let token = ctx.cookies.get('token')
    if (token) return token

    token = ctx.request.body.token
    if (token) return token

    token = ctx.request.query.token
    if (token) return token
    else return false
}
/** md5签名
 * @param str
 */
const secretKey = 'asd@#$^&*TEGDFGQ%@^*^%&@#SDURTGFH撒娇客户'
export const md5 = (str: string, key: string = secretKey) => {
    let obj = crypto.createHash('md5')
    obj.update(key + str)
    return obj.digest('hex')
}

/** 文件重命名
 * @param newName
 * @param oldName
 */
export const rename = (newName: string, oldName: string) => {
    return new Promise((resolve, reject) => {
        fs.rename(oldName, newName, (err: any) => {
            if (err) reject(err)
            resolve('ok')
        })
    })
}

/** 删除文件
 * @param filepath 
 */
export const unlink = (filepath: string) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filepath, (err: any) => {
            if (err) reject(err)
            resolve('ok')
        })
    })
}

/** 读取文件
 * @param filepath 
 */
export const readFile = (filepath: string) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, (err: any, data: any) => {
            if (!err) {
                resolve(data)
            } else {
                reject(err)
            }
        })
    })
}

export default {
    hasInArray,
    getToken,
    md5,
    rename,
    unlink,
    readFile
}
