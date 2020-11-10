const Router = require('koa-router');
const router = new Router();
let UserService = require('../service/UserService');

router.post('/update', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await UserService.updateUser({ params, config });
});

router.post('/add', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await UserService.addUser({ params, config });
});

module.exports = router;