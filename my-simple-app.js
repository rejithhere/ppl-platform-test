'use strict'
const express = require('express')
var app = express()

const port = 8080

// Business logic sits under 'components' directory; need to unit test these
const version = require('./components/version.js')

app.get('/version', function (req, res) {
  res.send(version.version())
})

app.get('/', function (req, res) {
  res.send(homepage.content())
})


app.listen(port, () =>
console.log(`Example app listening on port ${port}!`))
