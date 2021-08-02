const { v4: generateId } = require("uuid");

var todos = require("../data");

function getTodos(req, res) {
  const { id } = req.params;

  if (!id) return res.status(200).send({ data: todos });
  else {
    const todo = todos.find((todo) => todo.id === id);

    return res.status(200).send({ data: todo });
  }
}

function addTodo(req, res) {
  const todo = req.body;

  const newTodo = {
    ...todo,
    completed: false,
    id: generateId(),
  };
  todos.push(newTodo);

  return res.status(201).send({ data: newTodo });
}

function deleteTodo(req, res) {
  const { id } = req.params;

  if (!id) return res.status(200).send({ message: "Invalid id" });
  else {
    todos = todos.filter((todo) => todo.id !== id);

    return res.status(200).send({ message: "Deleted successfully" });
  }
}

module.exports = {
  getTodos,
  addTodo,
  deleteTodo,
};
