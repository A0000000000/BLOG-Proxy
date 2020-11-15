let WebsiteInfoRemote = require('../remote/WebsiteInfoRemote');
const i18n = require('../i18n/i18n');

let methods = {};

Date.prototype.format = function (fmt) {
    var o = {
        'M+': this.getMonth() + 1,
        'd+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        'S': this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
        }
    }
    return fmt;
};

methods.getWebsiteVisitCount = async args => {
    let data = await WebsiteInfoRemote.getVisitCount(args.config);
    let res = { code: data.code };
    if (data.code === 0) {
        res.data = data.data;
    } else {
        res.message = i18n(data.message);
    }
    return res;
};


methods.getSystemCreateTime = async args => {
    let data = await WebsiteInfoRemote.getSystemCreateTime(args.config);
    let res = { code: data.code };
    if (data.code === 0) {
        let date = new Date(data.data);
        let currentDate = new Date();
        res.data = new Date(currentDate - date).getTime();
    } else {
        res.message = i18n(data.message);
    }
    return res;
};

methods.getIndexData = async args => {
    let visitCount = await WebsiteInfoRemote.getVisitCount(args.config);
    let systemCreateTime = await WebsiteInfoRemote.getSystemCreateTime(args.config);
    let res = {};
    if (visitCount.code !== 0) {
        res.visitCount = {
            code: visitCount.code,
            message: i18n(visitCount.message)
        }
    } else {
        res.visitCount = {
            code: visitCount.code,
            data: visitCount.data
        }
    }
    if (systemCreateTime.code !== 0) {
        res.systemCreateTime = {
            code: systemCreateTime.code,
            message: i18n(systemCreateTime.message)
        }
    } else {
        let date = new Date(systemCreateTime.data);
        let currentDate = new Date();
        res.systemCreateTime = {
            code: systemCreateTime.code,
            data: new Date(currentDate - date).getTime()
        }
    }
    return res;
};


methods.getLog = async args => {
    if (!args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.page) {
        args.params.page = 1;
    }
    if (!args.params.count) {
        args.params.count = 10;
    }
    if (!args.params.conditions) {
        args.params.conditions = {};
    }
    let data = await WebsiteInfoRemote.getLog(args.params, args.config);
    if (data.code === 0) {
        let arr = data.data.data;
        for (let i = 0; i < arr.length; i++) {
            arr[i].logTime = new Date(arr[i].logTime).format('yyyy-MM-dd hh:mm:ss');
        }
        return {
            code: data.code,
            data: data.data
        };
    } else {
        return {
            code: data.code,
            message: i18n(data.message)
        };
    }
};

methods.getAccessInfo = async args => {
    if (!args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        }
    }
    if (!args.params.page) {
        args.params.page = 1;
    }
    if (!args.params.count) {
        args.params.count = 10;
    }
    if (!args.params.conditions) {
        args.params.conditions = {};
    }
    let data = await WebsiteInfoRemote.getAccessInfo(args.params, args.config);
    if (data.code === 0) {
        let arr = data.data.data;
        for (let i = 0; i < arr.length; i++) {
            arr[i].accessTime = new Date(arr[i].accessTime).format('yyyy-MM-dd hh:mm:ss');
        }
        return {
            code: data.code,
            data: data.data
        };
    } else {
        return {
            code: data.code,
            message: i18n(data.message)
        };
    }
};

module.exports = methods;