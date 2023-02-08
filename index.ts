// without express.

import http from 'http'
const server=http.createServer((req,res)=>{
    switch(req.url){

        case"/":
        res.write("hellow kuku")
        res.end()
        break
        case"/home":
        res.write("Felix is here")
        res.end()
        break;
    }


})
server.listen(4000, ()=>{
    console.log("server is walking");
    
})