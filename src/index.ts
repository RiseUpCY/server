import * as Koa from 'koa'
const app = new Koa()
const http = require('http').createServer(app.callback())
const IO = require('socket.io')(http)

import bindSocket from './socket/index'
import bindCommon from './middlewrae/common'
import mapRoutes from './routes/index'

// 绑定socket通信
bindSocket(IO)

// 绑定公有中间件 跨域 消息体解析 静态文件等
bindCommon(app)

// 路由分发
mapRoutes(app)

const PORT = process.env.PORT ? process.env.PORT : 3030

http.listen(PORT, () => {
  console.log(`server is listening in port ${PORT}`)
})
// console.log(process.env.PORT, process.env.NODE_ENV)
