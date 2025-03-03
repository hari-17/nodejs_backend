const http = require('http');

const server = http.createServer((req,res)=>
{

    const url = req.url;
    if(url == '/')
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Home Page");
    }
    else if(url === "/project")
    {
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end("Projects Page");
    }
    else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end("Error Page");
    }

});

const PORT = 3000;

server.listen(PORT, ()=>{
    console.log(`Server listening to 3000`);
})