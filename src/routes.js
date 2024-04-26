const express = require('express')
const routes = express.Router()
const index = require('./api/now-playing')


routes.get('/api/user-read-currently-playing/spotify', index.index)

module.exports = routes