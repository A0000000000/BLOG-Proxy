let mongoose = require('mongoose')
let url = 'mongodb://A00000:1998@192.168.99.100:27017/blog?authSource=admin'
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then()

mongoose.set('useFindAndModify', false)

let connect = mongoose.connection

connect.on('open', () => {
    console.log('MongoDB连接成功.')
})

connect.on('err', err => {
    console.log('MongoDB连接失败. 原因: ', err)
})

module.exports = {
    mongoose,
    connect
}