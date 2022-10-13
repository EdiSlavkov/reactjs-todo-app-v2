import React, { useState, useRef, useEffect } from "react";
import uuid from "react-uuid";
import TodoData from "./TodoData";
import "./style.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import TodoNav from "./TodoNav";
import TodoContainer from "./TodoContainer";

const localStorageKey = "TODOS";

function App() {
  const [todos, addTodos] = useState([]);
  const nameRef = useRef();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(localStorageKey));
    if (saved) addTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos));
  }, [todos]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <TodoContainer
              data={
                <TodoNav
                  nameRef={nameRef}
                  todos={todos}
                  addTodos={addTodos}
                  Link={Link}
                  uuid={uuid}
                />
              }
            />
          }
        ></Route>
        <Route
          path="/todo-list"
          element={
            <TodoContainer
              data={
                <div className="d-flex flex-column mt-5 w-50 align-items-center">
                  <TodoData todos={todos} addTodos={addTodos} />
                  <Link to="/" className="btn btn-info ms-2 w-25">
                    Create todo
                  </Link>
                </div>
              }
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
