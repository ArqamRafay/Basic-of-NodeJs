const express = require('express')
const bodyParser = require("body-parser");
const cors = require('cors');
const APIPage = require("./routes/api")
var app = express();


app.use("/api", APIPage);

console.log('Welcom to node.js BackEnd')

let port = process.env.PORT || 4200

app.listen(port, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log(`listen: http://localhost:${port} `);
    }
})