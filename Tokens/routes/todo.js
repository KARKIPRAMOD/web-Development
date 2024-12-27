
import express from "express";
import { getTodo, addTodo, deleteTodo } from "../controllers/todo.js";
import { restricedToLoggedUserOnly } from "../middlewares/auth.js";

const router = express.Router();

router.get("/api/auth/index", restricedToLoggedUserOnly, getTodo);  
router.post("/api/auth/todo/add", restricedToLoggedUserOnly, addTodo);  
router.delete("/api/auth/todo/delete/:id", restricedToLoggedUserOnly, deleteTodo);  


export default router;
