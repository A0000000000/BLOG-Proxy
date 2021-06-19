const TokenCacheSchema = new mongoose.Schema({
    code: Number,
    message: String,
    username: String,
    password: String,
    login_token: String,
    login_token_expire: Date,
    refresh_token: String,
    refresh_token_expire: Date,
    type: String
})

const TokenCacheModel = mongoose.model('TokenCache', TokenCacheSchema)

module.exports = TokenCacheModel