let StaticConstant = require('../StaticConstant.json');
const i18n = require('../i18n/' + StaticConstant.i18n);
let AdministratorRemote = require('../remote/AdministratorRemote');
let methods = {};

methods.adminLogin = async params => {
    let data = params.data;
    if (!data.username || !data.password) {
        return {
            code: 1,
            message: i18n['A00000-009']
        };
    }
    let tmpData = await AdministratorRemote.login(params.data, params.config);
    let res = {};
    if (tmpData.code === 0) {
        res.code = 0;
        let token = tmpData.data.token;
        let config = {
            ip: params.config.ip,
            token
        };
        let isAdmin = await AdministratorRemote.isAdmin(config);
        if (isAdmin.code === 0) {
            if (!isAdmin.data) {
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

module.exports = methods;