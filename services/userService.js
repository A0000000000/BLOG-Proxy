const userRemote = require('../remotes/userRemote')
const tokenCacheCollection = require('../collections/TokenCacheCollection')

module.exports = {
    async login(username, password, ips) {
        const res = {
            code: 1,
            data: null,
            message: 'UNKNOWN_ERROR'
        }
        console.log(`开始登录, 用户名: ${username}, 密码: ${password}`)
        const cache = await tokenCacheCollection.getModelByUsername(username)
        if (cache && cache.username === username && cache.password === password && Date.now() < cache.refresh_token_expire.getTime()) {
            if (Date.now() < cache.login_token_expire.getTime()) {
                res.code = cache.code
                res.message = cache.message
                res.data = {
                    token: cache.login_token,
                    expires_in: cache.login_token_expire
                }
            } else {
                const data = (await userRemote.refresh(cache.refresh_token, ips)).data
                if (data.code === 0) {
                    const result = data.data
                    res.code = data.code
                    res.message = data.message
                    cache.login_token = result.access_token
                    cache.login_token_expire = new Date(Date.now() + 1000 * result.expires_in)
                    await tokenCacheCollection.updateModel(username, cache)
                    res.data = {
                        token: result.access_token,
                        expires_in: cache.login_token_expire
                    }
                }
            }
        } else {
            const data = (await userRemote.login(username, password, ips)).data
            if (data.code === 0) {
                const result = data.data
                const model = {
                    code: data.code,
                    message: data.message,
                    username, password,
                    login_token: result.access_token,
                    type: result.token_type,
                    login_token_expire: new Date(Date.now() + 1000 * result.expires_in),
                    refresh_token: result.refresh_token,
                    refresh_token_expire: new Date(Date.now() + 1000 * result.expires_in * 7)
                }
                data.data = result.access_token
                await tokenCacheCollection.addNewModel(model)
                res.code = data.code
                res.message = data.message
                res.data = {
                    token: result.access_token,
                    expires_in: model.login_token_expire
                }
            } else {
                res.code = data.code
                res.data = data.data
                res.message = data.message
            }
        }
        console.log('登录结果: ' + JSON.stringify(res))
        return res
    },
    async info(token, ips) {
        console.log('获取登录用户信息, 用户token: ' + token)
        const cache = await tokenCacheCollection.getModelByLoginToken(token)
        if (!cache) {
            return {
                code: 1,
                data: null,
                message: 'UNKNOWN_ERROR'
            }
        }
        const data = (await userRemote.info(`${cache.type} ${token}`, ips)).data
        console.log('用户信息: ' + JSON.stringify(data))
        return data
    }
}