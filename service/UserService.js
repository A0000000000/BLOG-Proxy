let UserRemote = require('../remote/UserRemote');
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

methods.updateUser = async args => {
    if (!args || !args.params || !args.params.id) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (args.params.status !== 0 && args.params.status !== 1) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await UserRemote.updateUser({ id: args.params.id, status: args.params.status }, args.config);
    if (data.code === 0) {
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

methods.addUser = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.username || !args.params.password || !args.params.email) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await UserRemote.addUser(args.params, args.config);
    if (data.code === 0) {
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
}

module.exports = methods;