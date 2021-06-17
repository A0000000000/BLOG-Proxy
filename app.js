const Koa = require('koa')
const bodyParser = require('koa-body')
const cors = require('koa2-cors')
const json = require('koa-json')
const router = require('./router')
const axios = require('./axios')

const app = new Koa()

global.axios = axios

app.use(bodyParser({
    enableTypes: ['json', 'form', 'text'],
    multipart: true
}))
app.use(json())
app.use(cors())
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000, () => {
    console.log('App is running at http://localhost:3000')
})
