const {Todo} = require('../models/todo.model')

const createTodo = async( req,res)=>{
    const {title}= req.body
    try {
        const todo = await Todo.create( {
            title:title
        })


        if(!todo){
            res.send("Todo not created")
        
        }
        else{
            res.send({
                message:'todo created',
                todo:todo
            })

        }


    } catch (error) {
        res.send(error)
    }
}


const getTodo = async(req,res) => {
    try {
        const todos=await Todo.find();

        res.send(todos)
    } catch (error) {
        res.send(error)
    }

}

module.exports={createTodo,getTodo}