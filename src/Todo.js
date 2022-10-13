import React from "react";

export default function Todo({ todo, markTodo, deleteTodo }) {
  function handleClick() {
    markTodo(todo.id);
  }

  function handleDelete() {
    deleteTodo(todo.id);
  }

  return (
    <div className="px-5 mb-2 w-50">
      <label className="d-flex" htmlFor={todo.id}>
        <input
          className="form-check-input me-2"
          id={todo.id}
          type="checkbox"
          checked={todo.complete}
          onChange={handleClick}
        />
        {todo.complete ? (
          <del>
            <span className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
              {todo.name}
            </span>
          </del>
        ) : (
          <span className="list-group-item d-flex align-items-center border-0 mb-2 rounded">
            {todo.name}
          </span>
        )}
        <button className="btn btn-info ms-2" onClick={handleDelete}>
          Delete
        </button>
      </label>
    </div>
  );
}
