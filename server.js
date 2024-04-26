require('dotenv').config()
const express = require('express')
const server = express()
const routes = require('./src/routes')
const config = require('./config')

server.use(config)
server.use(express.urlencoded({ extended: true }))
server.use(express.json())

server.use(routes)

server.listen(process.env.PORT, ()=>{
    console.log(`Server rodando na porta ${process.env.PORT}`)
    console.log(`Ctrl + click: http://localhost:${process.env.PORT}`)
})
