const http = require("http");
const fs = require("fs")
http.createServer((req,res)=>{
    switch(req.url){
        case '/home':
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream('home.html').pipe(res);
            break;
        case '/about':
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream('about.html').pipe(res);
            break;
        case '/contact':
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream('contact.html').pipe(res);
            break;
        default:
            res.writeHead(200,{'Content-Type':'text/html'})
            fs.createReadStream('home.html').pipe(res);
            break;
        }
}).listen(8000,()=>{
    console.log("Hello World")
})