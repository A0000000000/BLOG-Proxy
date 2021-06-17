const Router = require('koa-router')
const router = new Router()

const index = require('./routers/index')

router.use('/', index.routes())

module.exports = router