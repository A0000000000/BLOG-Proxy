const { mongoose, connect } = require('./mongodb')
const axios = require('./axios')

global.mongoose = mongoose
global.connect = connect
global.axios = axios

const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('koa2-cors')
const json = require('koa-json')
const router = require('./router')
const i18n = require('./middleware/i18n')

const app = new Koa()


app.use(bodyParser({
    enableTypes: ['json', 'form', 'text'],
    multipart: true
}))
app.use(json())
app.use(cors())
app.use(i18n('zh-CN.json'))
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000')
})
