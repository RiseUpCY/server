import tool from './index'
const jwt = require('jsonwebtoken')

const defaultKey = '曹尼玛的黄天才'

// jwt签名函数
interface PayLoad {
    access?: string[]
    [any: string]: any
}
interface Sing {
    (data?: PayLoad, exp?: number, key?: string): string
}
export const sign: Sing = (data = {}, exp = 3000, key = defaultKey) => {
    return jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + exp,
            data
        },
        key
    )
}

// jwt获得解析结果
// error.message invalid signature, jwt expired
interface Verify {
    (token: string, onlydata?: boolean, key?: string): any
}
export const verify: Verify = (token, onlydata, key = defaultKey) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, key, (err: any, data: any) => {
            if (!err) {
                if (onlydata) {
                    resolve(data.data)
                }
                resolve(data)
            } else {
                reject(err.message)
            }
        })
    })
}

// jwt获得权限
interface GetAccess {
    (token: string, type?: [string] | string, key?: string): any
}
/**    
 * @token 只有这个参数就返回整个权限数组
 * @type  string，传入用户等级如admin， 就返回是否有权限
*/ 
export const getAccess: GetAccess = (token, type, key = defaultKey) => {
    return new Promise((resolve, reject) => {
        verify(token, true, key).then((res: any) => {
            let access = res.access ? res.access : []
            if (type) {
                let cando = tool.hasInArray(type as []|string, access)
                resolve(cando)
            } else {
                resolve(access)
            }
        }, (err: any) => {
            reject(err)
        })
    })
}

export default {
    sign,
    verify,
    getAccess
}
