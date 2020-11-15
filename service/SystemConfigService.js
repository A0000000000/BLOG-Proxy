let SystemConfigRemote = require('../remote/SystemConfigRemote');
const i18n = require('../i18n/i18n');
let methods = {};

methods.getCodeContrast = async args => {
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
    let data = await SystemConfigRemote.getCodeContrast(args.params, args.config);
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

methods.addCodeContrast = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.name || !args.params.value) {
        return {
            code: 1,
            message: i18n('A00000-009')
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
            message: i18n(data.message)
        };
    }
};

methods.removeCodeContrast = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.id) {
        return {
            code: 1,
            message: i18n('A00000-009')
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
            message: i18n(data.message)
        };
    }
}

methods.getAccessSource = async args => {
    if (!args || !args.params) {
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
    let data = await SystemConfigRemote.getAccessSource(args.params, args.config);
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

methods.addAccessSource = async args => {
    if (!args || !args.params || !args.params.name) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await SystemConfigRemote.addAccessSource(args.params, args.config);
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

methods.removeAccessSource = async args => {
    if (!args || !args.params || !args.params.id) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await SystemConfigRemote.removeAccessSource(args.params, args.config);
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

methods.getConfig = async args => {
    if (!args || !args.params) {
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
    let data = await SystemConfigRemote.getConfig(args.params, args.config);
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

methods.addConfig = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.name || !args.params.value) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await SystemConfigRemote.addConfig(args.params, args.config);
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

methods.updateConfig = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.id || !args.params.name || !args.params.value) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await SystemConfigRemote.updateConfig(args.params, args.config);
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

methods.removeConfig = async args => {
    if (!args || !args.params) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    if (!args.params.id) {
        return {
            code: 1,
            message: i18n('A00000-009')
        };
    }
    let data = await SystemConfigRemote.removeConfig(args.params, args.config);
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