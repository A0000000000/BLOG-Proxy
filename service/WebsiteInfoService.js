let WebsiteInfoRemote = require('../remote/WebsiteInfoRemote');
let StaticConstant = require('../StaticConstant.json');
const i18n = require('../i18n/' + StaticConstant.i18n);

let methods = {};

methods.getWebsiteVisitCount = async (params) => {
    let data = await WebsiteInfoRemote.getVisitCount(params);
    let res = { code: data.code };
    if (data.code === 0) {
        res.data = data.data;
    } else {
        res.message = i18n[data.message] ? i18n[data.message] : data.message;
    }
    return res;
};


methods.getSystemCreateTime = async (params) => {
    let data = await WebsiteInfoRemote.getSystemCreateTime(params);
    let res = { code: data.code };
    if (data.code === 0) {
        let date = new Date(data.data);
        let currentDate = new Date();
        res.data = new Date(currentDate - date).getTime();
    } else {
        res.message = i18n[data.message] ? i18n[data.message] : data.message;
    }
    return res;
}

module.exports = methods;