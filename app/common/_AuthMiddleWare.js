let isAuth = (req, res, next) => {
    let _token = req.headers;
    console.log(_token);
}

module.exports = {
    isAuth
}