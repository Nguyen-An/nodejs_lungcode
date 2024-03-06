const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const _AuthMiddleWare = require('./app/common/_AuthMiddleWare')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

require('./app/routers/home.router')(app);
app.use(_AuthMiddleWare.isAuth);
require('./app/routers/book.router')(app);

app.listen(3000, () => {
    console.log("server listening on port http://localhost:3000");
})