const Router = require('koa-router');
const router = new Router();
let AdministratorService = require('../service/AdministratorService')

router.post('/login', async ctx => {
    let params = {
        config: {
            ip: ctx.request.ip
        },
        data: ctx.request.body
    };
    ctx.body = await AdministratorService.adminLogin(params);
});

router.post('/reflushToken', async ctx => {
    let params = {
        config: {
            ip: ctx.request.ip
        },
        params: ctx.request.body
    }
    ctx.body = await AdministratorService.reflushToken(params);
});


module.exports = router;
