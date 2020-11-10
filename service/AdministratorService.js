let StaticConstant = require('../StaticConstant.json');
const i18n = require('../i18n/' + StaticConstant.i18n);
let AdministratorRemote = require('../remote/AdministratorRemote');
let methods = {};

Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S": this.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};

methods.adminLogin = async args => {
    let data = args.data;
    if (!data.username || !data.password) {
        return {
            code: 1,
            message: i18n['A00000-009']
        };
    }
    let tmpData = await AdministratorRemote.login(args.data, args.config);
    let res = {};
    if (tmpData.code === 0) {
        res.code = 0;
        let token = tmpData.data.token;
        let config = {
            ip: args.config.ip,
            token
        };
        let isAdmin = await AdministratorRemote.isAdmin(config);
        if (isAdmin.code === 0) {
            if (!isAdmin.data) {
                res.code = 1;
                res.message = '该用户非管理员账户';
            } else {
                res.data = tmpData.data;
            }
        } else {
            res.code = isAdmin.code;
            res.message = i18n[isAdmin.message] ? i18n[isAdmin.message] : isAdmin.message;
        }
    } else {
        res.code = tmpData.code;
        res.message = i18n[tmpData.message] ? i18n[tmpData.message] : tmpData.data;
    }
    return res;
};

methods.reflushToken = async args => {
    if (!args || !args.params || !args.params.token) {
        return {
            code: 1,
            message: i18n['A00000-009']
        };
    }
    let data = await AdministratorRemote.flushToken(args.params, args.config);
    if (data.code === 0) {
        return {
            code: data.code,
            data: data.data
        };
    } else {
        return {
            code: data.code,
            message: i18n[data.message] ? i18n[data.message] : data.message
        };
    }
};

methods.getUserView = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n["A00000-009"]
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
    let data = await AdministratorRemote.getUserView(args.params, args.config);
    if (data.code === 0) {
        let pageData = data.data.data;
        pageData.forEach(item => {
            item.createTime = new Date(item.createTime).format('yyyy-MM-dd hh:mm:ss');
            if (item.birthday) {
                item.birthday = new Date(item.birthday).format('yyyy-MM-dd');
            }
        });
        return {
            code: data.code,
            data: data.data
        };
    } else {
        return {
            code: data.code,
            message: i18n[data.message] ? i18n[data.message] : data.message
        };
    }
};

module.exports = methods;