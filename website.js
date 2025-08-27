const http= require('http')
const fs=require('fs')
const port=process.env.PORT ||3000;


const server =http.createServer((req,res)=>{
    console.log(req.url)
    
    res.setHeader('Content-Type','text/html')
    if(req.url=='/cwh')
    {
        res.statusCode=200;
        res.end('<h1>This is for Basis Learning</h1> <p>This is for basis learning</p>')
    }
    else if(req.url=='/about')
    {
        res.statusCode=200;
        res.end('<h1>About Basis Learning</h1> <p>This is about basis learning</p>')
    }
    else if(req.url=='/hello')
    {
        res.statusCode=200;
        const data=fs.readFileSync('index.html')
        res.end(data.toString())
    }
    else{
        // res.ahmed();
        res.statusCode=404;
        res.end('<h1>Not Found</h1> <p>Hey this page is no found on server</p>')

    }

});
server.listen(port,()=>{
    console.log((`Server is listening on port ${port}`))

});


