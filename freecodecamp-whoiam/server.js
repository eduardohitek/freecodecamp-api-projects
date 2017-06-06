const express = require('express')
const app = express()


app.use("/", function(req, res){
    console.log(req.connection.remoteAddress)
    console.log(req.socket.remoteAddress)
    console.log(req.ip)
    console.log(req.headers['accept-language'])
    console.log(req.headers['user-agent'])
    res.send("ok!")
})

app.listen(8080, function (params) {
    console.log("Server running in port 8080");
})