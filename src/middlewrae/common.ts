const bodyparser = require('koa-bodyparser')
const cors = require('koa2-cors')
const koaStatic = require('koa-static')

const CORS_CREDENTIALS = process.env.CORS_CREDENTIALS
  ? process.env.CORS_CREDENTIALS
  : false
const dev = process.env.NODE_ENV === 'develoopment'

function bindMiddleWare(app: any): void {
  // 设置跨域
  app.use(
    cors({
      origin: (ctx: any) => {
        if (dev) {
          // 开发模式任意跨域
          return ctx.request.header.origin
        }
        return false
      },
      maxAge: 60,
      credentials: CORS_CREDENTIALS
      // allowMethods: ['GET', 'POST', 'DELETE'],
      // allowHeaders: ['Content-Type', 'Authorization', 'Accept']
    })
  )
  // 解析消息体
  app.use(bodyparser())
  
  // 响应格式中间件
  app.use(require('./response'))

  // 读取静态文件 运行目录为 基础路径
  app.use(koaStatic('src/public'))

}
export default bindMiddleWare
