const Router = require('koa-router');
const router = new Router();
let WebsiteInfoService = require('../service/WebsiteInfoService');

router.get('/visitCount', async ctx => {
    let ip = ctx.request.ip;
    let params = {headers: {ip}};
    let data = await WebsiteInfoService.getWebsiteVisitCount(params);
    ctx.body = data;
});

router.get('/systemCreateTime', async ctx => {
    let ip = ctx.request.ip;
    let params = {headers: {ip}};
    let data = await WebsiteInfoService.getSystemCreateTime(params);
    ctx.body = data;
});

module.exports = router;