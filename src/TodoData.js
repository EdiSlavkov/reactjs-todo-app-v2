import React from "react";
import Todo from "./Todo";

export default function TodoData({ todos, addTodos }) {
  function deleteTodo(id) {
    const todosCopy = [...todos];
    const remainingTodos = todosCopy.filter((todo) => todo.id !== id);
    addTodos(remainingTodos);
  }

  function markTodo(id) {
    const todosCopy = [...todos];
    const todo = todosCopy.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    addTodos(todosCopy);
  }

  return todos.map((e, index) => {
    return (
      <Todo key={index} todo={e} markTodo={markTodo} deleteTodo={deleteTodo} />
    );
  });
}
