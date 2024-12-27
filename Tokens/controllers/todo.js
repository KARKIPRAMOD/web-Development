import Todo from "../models/todo.js";
import { restricedToLoggedUserOnly } from "../middlewares/auth.js";  

export const getTodo = async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect("/api/auth/login");
        }

        const todos = await Todo.find({ createdBy: req.user._id });

        console.log("Fetched todos:", todos); // Log the fetched todos
        res.render("index", { todos }); // Pass todos to the view
    } catch (err) {
        console.log("Error fetching the Todos:", err);
        res.status(500).send("Internal Server Error");
    }
};


export const addTodo = async (req, res) => {
    try {
        const { task, deadline } = req.body;
        if (!task) return res.status(400).send("Task is required");

        if (!req.user) {
            return res.redirect("/api/auth/login");
        }
        await Todo.create({
            task,
            deadLine: deadline,
            createdBy: req.user._id 
        });
        res.redirect("/api/auth/index"); // Redirect to the todo page

    } catch (err) {
        console.log("Error adding the Task");
        res.status(500).send("Error adding the task");
    }
};

export const deleteTodo = async (req, res) => {
    try {
        if (!req.user) {
            return res.redirect("/api/auth/login");
        }
        const todoId = req.params.id;
        await Todo.findByIdAndDelete(todoId);
        res.redirect("/");

    } catch (err) {s
        res.status(500).send("Error deleting the task");
    }
};