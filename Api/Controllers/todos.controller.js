//UTILS
const {filterObj} = require("../Utils/filterObj");

//MODELS
const { todo,Todo }= require("../Models/todos.model")

//ENDPOINTS
//GET ALL TODOS
exports.getAllTodos = async (req,res) => {
    try{
        const todosDb = await Todo.findAll()
        res.status(200).json({
            data:{
                todos: todosDb,
            },
        })
    }
    catch(error){
        console.log(error);
    }
}

//SAVE NEW TODO
exports.createTodoPost = async (req,res) => {
    try {
        const{content} = req.body; //chore

        const newTodo = await Todo.create({
            content: content,
        })

        res.status(201).json({
            status:"Succes",
            data: { newTodo },
        })
        
    } catch (error) {
        console.log(error)
    }
}

//UPDATE TODO PATCH
exports.updateTodoPatch = async (req,res) => {
    try {
        const {id} = req.params;
        const data = filterObj(req.body, "chore","content");

        const todo = await Todo.findOne({where:{id:id}})

        if (!todo){
            res.status(404).json({
                status:"error",
                message:"Cant update todo, invalid ID"
            })
            return
        }

        await todo.update({...data})
        res.status(204).json({status:"success"})
        
    } catch (error) {
        console.log(error)
    }

}

//DELETE TODO
exports.deleteTodo = async (req,res) => {
    try {
        const {id} = req.params
        const todo = await Todo.findOne({where:{id:id}})

        if(!todo){
            res.status(404).json({
                status:"error",
                message: "Cant delete todo,invalid ID"
            })
            return;
        }
        await todo.destroy()
        res.status(204).json({status:"success"})
        
    } catch (error) {
        console.log(error)
    }
}