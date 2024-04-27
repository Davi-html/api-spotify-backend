require('dotenv').config()
const express = require('express')
const server = express()

const cors = require('cors')
const routes = require('./src/routes')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())


const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}
server.use(cors(corsOptions))
server.use(routes)


server.listen(process.env.PORT, ()=>{
    console.log(`Server rodando na porta ${process.env.PORT}`)
    console.log(`Ctrl + click: http://localhost:3000/api/user-read-currently-playing/spotify`)
})
