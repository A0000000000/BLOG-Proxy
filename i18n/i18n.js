const StaticConstant = require('../StaticConstant.json');
const i18n = require(`./${StaticConstant.i18n}`);
module.exports = message => i18n[message] || message;