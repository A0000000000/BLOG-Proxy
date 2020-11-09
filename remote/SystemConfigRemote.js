let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};

methods.getCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastGet';
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            token: config.token,
            source: StaticConstant.source
        }
    });
    return data.data;
};

methods.addCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastAdd';
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            token: config.token,
            source: StaticConstant.source
        }
    });
    return data.data;
}

methods.removeCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastRemove';
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            token: config.token,
            source: StaticConstant.source
        }
    });
    return data.data;
};
module.exports = methods;