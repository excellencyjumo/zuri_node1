const http = require("http");
const { url } = require("inspector");
http.createServer((req,res)=>{
    switch(req.url){
        case '/':
            res.writeHead(200,{'Content-Type':'text/html'})
            break;
        
        }
}).listen(8000,()=>{
    console.log("Hello World")
})