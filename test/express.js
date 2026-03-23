import express from "express"

const app = express()

app.use(express.json())

const users = []

app.get("/user",(req,res)=>{
 res.json(users)
})

app.post("/user",(req,res)=>{

 const user = req.body

 users.push(user)

 res.json(users)

})

app.listen(3000,()=>{
 console.log("server running")
})