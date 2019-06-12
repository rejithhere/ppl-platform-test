'use strict'
const express = require('express')
var app = express()
var pjson = require('./package.json');


var revision = require('child_process')
    .execSync('git rev-parse HEAD')
    .toString().trim()

const port = 8080

app.get('/', function (req, res) {
  res.send(homepage.content())
})

app.get('/version', function (req, res) {
  return res.json({
PlatformTestApp: [{
"version": pjson.version,
"lastcommitsha": revision,
"description" : "pre-interview technical test"
}]} 
)
})

app.listen(port, () =>
console.log(`Example app listening on port ${port}!`))

