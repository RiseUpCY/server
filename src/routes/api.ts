const router = require('koa-router')({
    prefix: '/api'
})

const controllers = require('../controllers/api/index')

// console.log(controllers) 注意模块导出方式决定使用方式
router.get('/test', controllers.test.get)

export default router