module.exports = {
    async login(username, password, ips) {
        return await axios.post('/api/creator/user/login', {
            username, password
        }, {
            headers: {
                ip: ips
            }
        })
    },
    async refresh(token, ips) {
        return await axios.post('/api/creator/user/refresh', {
            token
        }, {
            headers: {
                ip: ips
            }
        })
    },
    async info(token, ips) {
        return await axios.get('/api/creator/user/getUserInfo', {
            headers: {
                Authorization: token,
                ip: ips
            }
        })
    }
}