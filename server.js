const express = require('express');
const app = express()
app.use(express.json())

const users =[
    {id:"1",email:"123@gmail.com", password:"123abcdef"},
    {id:"2",email:"1234@gmail.com", password:"123abcdef"},
    {id:"3",email:"12356@gmail.com", password:"123abcdef"},
]

app.get('/',(req,res)=>{
    return res.status(201).json({"message":"hello there"});
})

app.put('/change',(req,res)=>{
    const { email,password } = req.body;
    if(users.findById(email)){
        users.findByIdAndUpdate(email);
        return res.status(200).json({message: "User deleted successfully"})
    }else{
        return res.status(404).json({message:"email not found"})
    }
})
app.delete('/delete',(req,res)=>{
    const { email,password } = req.body;
    if(users.findBy(email)){
        users.findByIdAndDelete(password);
        return res.status(200).json({message: "Password changed successfully"})
    }else{
        return res.status(404).json({message:"email not found"})
    }
})

const PORT = 3000;
app.listen(PORT,()=>console.log(`server is running at http://localhost:${PORT}`))


