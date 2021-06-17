const axios = require('axios')

axios.defaults.baseURL = 'http://47.103.147.156:8080/'

axios.interceptors.request.use(config => {
    console.log(`----------begin request----------`)
    console.log('request url: ', config.url)
    console.log('request method: ', config.method)
    console.log('request data: ', config.data)
    console.log(`----------end request----------`)
    return config
}, error => {
    console.log(`----------begin request error----------`)
    console.log(error)
    console.log(`----------end request error----------`)
    return Promise.reject(error)
})

axios.interceptors.response.use(response => {
    console.log(`----------begin response----------`)
    console.log('response status: ', response.status)
    console.log('response data: ', response.data)
    console.log(`----------end response----------`)
    return response
}, error => {
    console.log(`----------begin response error----------`)
    console.log(error)
    console.log(`----------end response error----------`)
    return Promise.reject(error)
})

module.exports = axios