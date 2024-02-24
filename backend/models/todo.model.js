const mongoose=require('mongoose')

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String
        },
        date:{
            type:Date,
            default:new Date()
        },
    }
)
const Todo = mongoose.model('Todo',todoSchema)
module.exports = {Todo}


