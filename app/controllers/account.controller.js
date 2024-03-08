let Account = require('../models/account.model')

exports.login = (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log(username, password);
}

exports.register = (req, res) => {
    let data = {
        username: req.body.username,
        password: req.body.password
    }
    
    Account.account_create(data, (data_result) => {
        res.json({result: data_result})
    })
}