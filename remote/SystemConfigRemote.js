let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};

async function sendPostRequest(url, params, config) {
    let data = await axios.post(url, params, {
        headers: {
            ip: config.ip,
            token: config.token,
            source: StaticConstant.source
        }
    });
    return data;
}


methods.getCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastGet';
    let data = await sendPostRequest(url, params, config);
    return data.data;
};

methods.addCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastAdd';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.removeCodeContrast = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/codeContrastRemove';
    let data = await sendPostRequest(url, params, config);
    return data.data;
};

methods.getAccessSource = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/accessSourceGet';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.addAccessSource = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/accessSourceAdd';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}


methods.removeAccessSource = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/accessSourceRemove';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.getConfig = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/systemConfigGet';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.addConfig = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/systemConfigAdd';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.updateConfig = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/systemConfigUpdate';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}

methods.removeConfig = async (params, config) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + '/api/admin/systemConfigRemove';
    let data = await sendPostRequest(url, params, config);
    return data.data;
}


module.exports = methods;