const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userRoutes=require('./routes/user.routes')
const todoRoutes = require('./routes/todo.routes')
const cors=require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://nijaichikitsa:Chikitsa@cluster0.xmnz4cj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
    console.log('database connected')
})


app.listen(4000,()=>{
    console.log("hello world")
})

app.get('/',(req,res)=>{
    res.send('this is chikitsa')
});


app.use('/',userRoutes)

app.use('/todo',todoRoutes)

