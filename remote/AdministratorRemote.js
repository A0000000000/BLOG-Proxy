let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};

methods.login = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/login';
    let data = await axios.post(url, params, {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            source: StaticConstant.source,
            ip: config.ip
        },
        transformRequest: [function (args) {
            let ret = ''
            for (let it in args) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(args[it]) + '&'
            }
            return ret
        }]
    });
    return data.data;
};


methods.isAdmin = async config => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/other/isAdmin';
    let data = await axios.get(url, {
        headers: {
            source: StaticConstant.source,
            ip: config.ip,
            token: config.token
        }
    });
    return data.data;
};

methods.flushToken = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/other/flushToken';
    let data = await axios.post(url, params.token, {
        headers: {
            source: StaticConstant.source,
            ip: config.ip
        }
    });
    return data.data;
};
module.exports = methods;