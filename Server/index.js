const http = require("http")
const fs = require("fs")

const myServwer = http.createServer((req, res) => {
    console.log(req.url)
    const log = `${Date.now()}: New Req recieve from hostname: ${req.headers.host} on path/url ${req.url}`
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("hello from server")
    })
}).listen(8000, () => {
    console.log("server started")
});