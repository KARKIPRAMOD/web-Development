const todoModel = require("../model/model");

exports.getTodos = async(req,res) =>{
    try{
        const todos = await todoModel.find();
        res.render("index",{todos});
    }
    catch(err){
        console.log("Error fetching the Todos");
    }
};

exports.addTodos = async(req,res)=>{
    try{
        const {task} = req.body;
        if(!task) return res.status(400).send("Task is required");
        await todoModel.create({task});
        res.redirect("/");
    }
    catch(err){
        console.log("Errror adding the Task");
    }
}

exports.deleteTodo =async(req,res)=>{
    try{
        const todoId = req.params.id;
        await todoModel.findByIdAndDelete(todoId);
        res.redirect("/");
    }
    catch(err){
        res.status(500).send("Error deleting the task");
    }
}

