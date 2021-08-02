const { Router } = require("express");

const todoListsController = require("../controller/todoLists");

const router = Router();

router
  .route("/todos/:id?")
  .get(todoListsController.getTodos)
  .post(todoListsController.addTodo)
  .delete(todoListsController.deleteTodo);

module.exports = router;
