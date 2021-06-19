module.exports = (filename) => {
    const json = require('../i18n/' + filename)
    return async (ctx, next) => {
        console.log('----- 国际化开始 -----')
        await next()
        if (ctx.body && ctx.body.message && json[ctx.body.message]) {
            console.log(`进行国际化 ---> 将[${ctx.body.message}]修改为[${json[ctx.body.message]}]`)
            ctx.body.message = json[ctx.body.message]
        }
        console.log('----- 国际化结束 -----')
    }
}