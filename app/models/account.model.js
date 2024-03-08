const db = require('../common/connect')

const Account = (account) => {

}

Account.account_create = (data, callback) => {
    db.query("INSERT INTO Account SET ?", data, (err, result) => {
        (err || result.length) ? callback(null) : callback({id: result})
    })
}

module.exports = Account