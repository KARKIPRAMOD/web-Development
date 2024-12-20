const express = require("express");
const router = express.Router();
const todoController = require("../controller/controller");

router.get("/",todoController.getTodos);
router.post("/add",todoController.addTodos);
router.get("/delete/:id",todoController.deleteTodo);
 

module.exports = router;