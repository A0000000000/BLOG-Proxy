const Router = require('koa-router');
const router = new Router();
let WebsiteInfoService = require('../service/WebsiteInfoService');

router.get('/visitCount', async ctx => {
    let ip = ctx.request.ip;
    let params = { config: { ip } };
    let data = await WebsiteInfoService.getWebsiteVisitCount(params);
    ctx.body = data;
});

router.get('/systemCreateTime', async ctx => {
    let ip = ctx.request.ip;
    let params = { config: { ip } };
    let data = await WebsiteInfoService.getSystemCreateTime(params);
    ctx.body = data;
});

router.get('/indexData', async ctx => {
    let ip = ctx.request.ip;
    let params = { config: { ip } };
    let data = await WebsiteInfoService.getIndexData(params);
    ctx.body = data;
});

router.post('/log', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await WebsiteInfoService.getLog({ params, config });
});

router.post('/accessInfo', async ctx => {
    let params = ctx.request.body;
    let config = {
        ip: ctx.request.ip,
        token: ctx.header.token
    };
    ctx.body = await WebsiteInfoService.getAccessInfo({ params, config });
});


module.exports = router;