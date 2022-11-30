const http = require('http')
const server = http.createServer(function(req,res){
    res.writeHead(200, {"content-type" : "text/html"})
    res.end("<h1> é Melhor Usar o Express</h1>")
})

const port = 1234 
server.listen(port, function(){
    console.log(`escutando a ${port}`)
})