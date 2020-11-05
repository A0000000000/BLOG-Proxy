// 导入Koa框架及相关中间件
const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const Cors = require('koa2-cors');
const JsonData = require('./middleware/JsonData');

// 实例化网站App和路由规则
const app = new Koa();
const router = new Router();

// 导入子路由
let WebsiteInfoService = require('./router/WebsiteInfoRouter');
let SystemConfigRouter = require('./router/SystemConfigRouter');
let AdministratorRouter = require('./router/AdministratorRouter');

// 使用子路由
router.use('/api', WebsiteInfoService.routes());
router.use('/api/systemConfig', SystemConfigRouter.routes());
router.use('/api/admin', AdministratorRouter.routes())
// 设置超时时间
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// 设置日志
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// 设置中间件
app.use(JsonData());
app.use(BodyParser());
app.use(Cors());
app.use(router.routes()).use(router.allowedMethods());

// 开启监听端口
app.listen(3000);