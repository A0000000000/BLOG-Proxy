let SystemConfigRemote = require('../remote/SystemConfigRemote');
let StaticConstant = require('../StaticConstant.json');
const i18n = require('../i18n/' + StaticConstant.i18n);
let methods = {};

methods.getCodeContrast = async args => {
    if (!args.params) {
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
    let data = await SystemConfigRemote.getCodeContrast(args.params, args.config);
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

methods.addCodeContrast = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n["A00000-009"]
        };
    }
    if (!args.params.name || !args.params.value) {
        return {
            code: 1,
            message: i18n["A00000-009"]
        };
    }
    let data = await SystemConfigRemote.addCodeContrast(args.params, args.config);
    if (data.code === 0) {
        return {
            code: data.code,
            data: data.data
        }
    } else {
        return {
            code: data.code,
            message: i18n[data.message] ? i18n[data.message] : data.message
        };
    }
};

methods.removeCodeContrast = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n["A00000-009"]
        };
    }
    if (!args.params.id) {
        return {
            code: 1,
            message: i18n["A00000-009"]
        };
    }
    let data = await SystemConfigRemote.removeCodeContrast(args.params, args.config);
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
}

module.exports = methods;