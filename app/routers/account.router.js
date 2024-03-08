module.exports = (router) => {
    var accountController = require("../controllers/account.controller");

    router.post("/register", accountController.register)
}