const http=require('http')

const server = http.createServer((req,res)=>{
   /**  if(res.url=='/hello'){
        res.end('hello my name is om kumar')
    }else{
        res.writeHead(404)
        res.end('use the write url')
    }*/
})
server.listen(650001,()=>{
    console.log('server got sterted')
})