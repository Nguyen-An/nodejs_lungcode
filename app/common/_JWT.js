const jwt = require("jsonwebtoken")
const _APP = require("./_APP")

// make => Tạo mã

let make = (user) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            { data: user },
            _APP.ACCESS_TOKEN,
            {
                algorithm: "HS256",
                expiresIn: _APP.TOKEN_TIME_LIFE,
            },
            (err, _token) => {
                if (err) reject(err);
                resolve(_token);
            }
        );
    })
}

// check => xác thực đúng sai
let check = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(
            token,
            _APP.ACCESS_TOKEN,
            (err, decoded) => {
                if (err) reject(err);
                resolve(decoded);
            }
        );
    })
}

module.exports = {
    make,
    check
}