import React from "react";
import Todo from "./Todo";

export default function TodoData({todos, markTodo, deleteTodo}){
    return (
        todos.map((e, index) => {
            return <Todo key={index} todo={e} markTodo = {markTodo} deleteTodo = {deleteTodo} />
        })
    )
}