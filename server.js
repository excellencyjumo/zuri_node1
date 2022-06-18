const http = require("http");
const { url } = require("inspector");
const app=http.createServer();
http.createServer("/home",(req,res)=>{
    switch(req.url){
        case "/home":
            res.send("HOME PAGE")
            break;
        case "/about":
            res.send("ABOUT PAGE")
            break;
        case "/contact":
            res.send("ANOTHER PAGE")
            break;    
        }
})
app.listen(8000,()=>{
    console.log("Hello World")
})