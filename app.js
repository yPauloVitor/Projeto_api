const express = require('express')
const router = require('./routes/routes')
require('dotenv').config();
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(router);
const port = process.env.PORT;
app.listen(port, () => {
    console.log("Server rodando na porta: " + port);
})