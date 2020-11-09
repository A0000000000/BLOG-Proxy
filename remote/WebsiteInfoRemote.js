let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};


methods.getVisitCount = async config => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + "/api/other/visitCountAdd";
    let data = await axios.get(url, {
        headers: {
            ip: config.ip,
            source: StaticConstant.source
        }
    });
    return data.data;
};

methods.getSystemCreateTime = async config => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + "/api/other/websiteCreateTimeGet";
    let data = await axios.get(url, {
        headers: {
            ip: config.ip,
            source: StaticConstant.source
        }
    });
    return data.data;
};

methods.getLog = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/systemLogGet';
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            source: StaticConstant.source,
            token: config.token
        }
    });
    return data.data;
}

methods.getAccessInfo = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/accessInfoGet';
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            source: StaticConstant.source,
            token: config.token
        }
    });
    return data.data;
}

module.exports = methods;