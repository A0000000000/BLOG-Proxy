const Router = require('koa-router');
const router = new Router();

let SystemConfigService = require('../service/SystemConfigService');

router.post('/codeContrast', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.getCodeContrast({ params, config });
});

router.post('/codeContrast/add', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.addCodeContrast({ params, config });
});

router.post('/codeContrast/remove', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.removeCodeContrast({ params, config });
});

module.exports = router;