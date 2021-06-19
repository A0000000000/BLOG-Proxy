const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
    ctx.body = {
        code: 200,
        message: 'SUCCESS'
    }
})

module.exports = router