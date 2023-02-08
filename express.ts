import express,{ json,Request, Response, Express} from "express"

const app: Express=express()
// middle ware
app.use(json()) //  adds body to the request


app.get("/",(req:Request, res:Response)=>{
    res.status(200).json({message:"hey there"})
})


const kuku:string[]=[]
app.post("/", (req:Request, res:Response)=>{
     const {name} =req.body
     kuku.push(name);

     res.status(201).json({message: "name added"})
     console.log(req.body);

     


})
app.get("/home/:id", (req:Request, res: Response)=>{
    const id = req.params.id
    res.status(200).json({id:id})

})



app.listen(5000,()=>{
    console.log("App is running");
    
})