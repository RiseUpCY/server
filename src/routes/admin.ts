const router = require('koa-router')({
    prefix: '/admin'
})
const controllers = require('../controllers/admin/index')

// console.log(controllers)
router.get('/test', controllers.test.default)


export default router