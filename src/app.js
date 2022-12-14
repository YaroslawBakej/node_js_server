const express = require('express')
const bodyParser = require('body-parser')
const user = require('../src/controllers/user.controllers')
const app = express()


app.use(bodyParser.json())
app.use('/user', user)

app.use((error, req, res, next) => {
    res.status(500).send(error.message);
});

module.exports = app

//commit//