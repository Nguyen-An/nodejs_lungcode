module.exports = function (router) {
    var homeController = require('../controllers/home.controller')
    var JWT = require("../common/_JWT")

    router.get("/", homeController.home)

    router.get("/about", homeController.about)

    router.get("/token", async (req, res) => { 
        let user = {
            name: "admin",
            email: "admin@example.com"
        }

        const _token = await JWT.make(user);

        res.json({token: _token})
    })

    router.get("/check_token", async (req, res) => { 
        let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Im5hbWUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AZXhhbXBsZS5jb20ifSwiaWF0IjoxNzA5NzE3MTM4LCJleHAiOjE3MDk3MjA3Mzh9.dLeyHDsahiML7LwJGCOejO5CTmh2qV5Tg2DVf293Zu8"

        try {
            const decoded = await JWT.check(token);
            res.json({decoded: decoded})
        } catch (error) {
            res.json("Ma token khong hop le")
        }
    })
};