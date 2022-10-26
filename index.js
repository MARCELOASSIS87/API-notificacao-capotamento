const express = require('express')
const server = express()

server.get('/',(req,res) => {
    return res.json({mensagem: 'Api está funfa'}) 
})

server.listen(3000,() => {
     console.log('Server em ação funcionando')
 })