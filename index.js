const express = require('express');
const app = express();
const homePage = require('./app/routers/home.router.js');
const bookPage = require('./app/routers/book.router.js');

app.use('', homePage);
app.use('', bookPage);

app.listen(3000, () => {
    console.log("server listening on port http://localhost:3000");
})