const router = require('koa-router')({
    prefix: '/admin'
})
const controllers = require('../controllers/admin/index')


// console.log(controllers)
router.get('/test', controllers.test.default)
// 测试权限中间件
router.use('/', require('../middlewrae/authority'))
router.get('/need', (ctx: any) => {
    console.log(ctx.userinfo)
    ctx.body = 'need user'
})


export default router