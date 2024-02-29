const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

require('./app/routers/home.router')(app);
require('./app/routers/book.router')(app);

app.listen(3000, () => {
    console.log("server listening on port http://localhost:3000");
})