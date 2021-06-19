const TokenCacheModel = require('../models/TokenCacheModel')

module.exports = {
    async getModelByUsername(username) {
        return await TokenCacheModel.findOne({ username })
    },
    async addNewModel(params) {
        return TokenCacheModel.create(params);
    },
    async updateModel(username, params) {
        return await TokenCacheModel.updateOne({ username }, params)
    },
    async getModelByLoginToken(token) {
        return await TokenCacheModel.findOne({ login_token: token })
    }
}