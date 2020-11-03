let WebsiteInfoRemote = require('../remote/WebsiteInfoRemote');
let methods = {};

methods.getWebsiteVisitCount = async (params) => {
    let data = await WebsiteInfoRemote.getVisitCount(params);
    let res = { code: data.code };
    if (data.code === 0) {
        res.data = data.data;
    } else {
        res.message = data.message;
    }
    return res;
};


methods.getSystemCreateTime = async (params) => {
    let data = await WebsiteInfoRemote.getSystemCreateTime(params);
    let res = { code: data.code };
    if (data.code === 0) {
        let date = new Date(data.data);
        let currentDate = new Date();
        res.data = new Date(currentDate - date);
    } else {
        res.message = data.message;
    }
    return res;
}

module.exports = methods;