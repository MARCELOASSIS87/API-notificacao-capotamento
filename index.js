const express = require('express')
const server = express()

server.get('https://api-notificacao-capotamento.vercel.app/',(req,res) => {
    return res.json({mensagem: 'Api está funfa'}) 
})

// server.listen(3000,() => {
//     console.log('Server em ação funcionando')
// })