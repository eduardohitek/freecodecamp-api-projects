const express = require('express')
const app = express()


app.use("/", function(req, res){
    const ipAddress = req.headers['x-forwarded-for']
    const software = req.headers['user-agent'].split('(')[1].split(')')[0]
    const language = req.headers['accept-language'].split(',')[0]
    const response = {
        ipaddress: ipAddress,
        language: language,
        software: software
    }
    res.json((response))
})

app.listen(8080, function (params) {
    console.log("Server running in port 8080");
})