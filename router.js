const Router = require('koa-router')
const router = new Router()

const indexRouter = require('./routers/indexRouter')
const userRouter = require('./routers/userRouter')

router.use('/', indexRouter.routes())
router.use('/user', userRouter.routes())

module.exports = router