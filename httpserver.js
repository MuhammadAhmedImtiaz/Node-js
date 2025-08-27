const http= require('http')
const port=process.env.PORT ||3000;




const server =http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode=200;
    res.setHeader('Content-Type','text/html')
    res.end('<h1>This is for Basis Learning</h1> <p>This is for basis learning</p>')

});
server.listen(port,()=>{
    console.log((`Server is listening on port ${port}`))

});


