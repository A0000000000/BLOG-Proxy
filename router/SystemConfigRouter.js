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

router.post('/accessSource', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.getAccessSource({ params, config });
});

router.post('/accessSource/add', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.addAccessSource({ params, config });
});

router.post('/accessSource/remove', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.removeAccessSource({ params, config });
});

router.post('/config', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.getConfig({ params, config });
});

router.post('/config/add', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.addConfig({ params, config });
});

router.post('/config/update', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.updateConfig({ params, config });
});

router.post('/config/remove', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await SystemConfigService.removeConfig({ params, config });
});


module.exports = router;