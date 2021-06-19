const Router = require('koa-router')
const router = new Router()
const userService = require('../services/userService')

router.get('/', async ctx => {
    ctx.body = {
        code: 200,
        message: 'SUCCESS'
    }
})

router.get('/info', async ctx => {
    try {
        const token = ctx.request.header.token
        const ips = [...ctx.request.ips, ctx.request.ip]
        ctx.body = await userService.info(token, ips)
    } catch (err) {
        ctx.body = {
            code: '1',
            message: 'UNKNOWN_ERROR'
        }
    }
})

router.post('/login', async ctx => {
    try {
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        const ips = [...ctx.request.ips, ctx.request.ip]
        ctx.body = await userService.login(username, password, ips)
    } catch (err) {
        ctx.body = {
            code: '1',
            message: 'UNKNOWN_ERROR'
        }
    }
})

module.exports = router