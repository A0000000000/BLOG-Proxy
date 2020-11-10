let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};

methods.updateUser = async (params, config) => {
    let url = `${StaticConstant.ip}:${StaticConstant.port}/api/admin/userViewUpdate`;
    let data = await axios.post(url, params, {
        headers: {
            source: StaticConstant.source,
            ip: config.ip,
            token: config.token
        }
    });
    return data.data;
};

methods.addUser = async (params, config) => {
    let url = `${StaticConstant.ip}:${StaticConstant.port}/api/admin/userViewAdd`;
    let data = await axios.post(url, params, {
        headers: {
            source: StaticConstant.source,
            ip: config.ip,
            token: config.token
        }
    });
    return data.data;
}

module.exports = methods;