const Router = require('koa-router')
const router = new Router()

router.get('/', async ctx => {
    let res = await axios.delete('/api/creator/essayComment/removeComment/1', {})
    console.log(ctx.request.headers['X-Orig-IP'])
    console.log(ctx.request.ip)

    ctx.body = 'App is running success.'
})

module.exports = router