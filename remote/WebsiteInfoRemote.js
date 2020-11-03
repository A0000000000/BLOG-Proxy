let axios = require('axios');
let StaticConstant = require('../StaticConstant.json');
let methods = {};


methods.getVisitCount = async (params) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + "/api/other/visitCountAdd";
    let config = { 
        headers: {
            source: StaticConstant.source
        }
    };
    if (params && params.headers && params.headers.ip) {
        config.headers.ip = params.headers.ip;
    }
    let data = await axios.get(url, config);
    return data.data;
};

methods.getSystemCreateTime = async (params) => {
    let url = StaticConstant.ip + ':' + StaticConstant.port + "/api/other/websiteCreateTimeGet";
    let config = { 
        headers: {
            source: StaticConstant.source
        }
    };
    if (params && params.headers && params.headers.ip) {
        config.headers.ip = params.headers.ip;
    }
    let data = await axios.get(url, config);
    return data.data;
};


module.exports = methods;