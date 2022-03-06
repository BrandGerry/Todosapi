const express = require("express");

//CONTROLLERS
const {
    getAllTodos,
    createTodoPost,
    updateTodoPatch,
    deleteTodo,

} = require("../Controllers/todos.controller")

//DEFINE ROUTES
const router = express.Router();

// GET http://localhost:4002/api/v1/todos
router.get("/",getAllTodos);

// POST http://localhost:4002/todos
router.post('/', createTodoPost);

// PATCH http://localhost:4002/todos/:id
router.patch('/:id', updateTodoPatch);

// DELETE http://localhost:4000/posts/:id
router.delete('/:id', deleteTodo);

module.exports = { todosRouter: router }

