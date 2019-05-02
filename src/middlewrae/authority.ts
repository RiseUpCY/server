import * as fs from 'fs'
import * as tool from '../tools/encrypt'
// 获取文件里的加密公钥 public key
// const cert = fs.readFileSync('public.pem');  
module.exports = async (ctx: any, next: any) => {
    // testtoken仅限测试时用
    let testtoken = tool.sign({
        fuck: 'fuck huang',
        arr: [1, 2, 3, 4],
        access: ['admin', 'super_admin']
    })
    let token = ctx.token ? ctx.token : testtoken
    // 仅限测试时用

    if (!token) {
        ctx.body = '你需要登录'
        return
    }
    // 这里catch err 可以按照自己的方法处理错误返回
    let userinfo = await tool.verify(token, true)
    // 把用户信息添加到ctx
    ctx.userinfo = userinfo

    await next()
}
