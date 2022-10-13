export default function TodoNav({ Link, todos, addTodos, nameRef, uuid }) {
  function addTodo(e) {
    const name = nameRef.current.value;
    if (name === "") {
      return;
    }
    addTodos((prevTodos) => {
      return [...prevTodos, { id: uuid(), name: name, complete: false }];
    });
    nameRef.current.value = null;
  }

  function markAllTodos() {
    const copy = [...todos];

    if (copy.every((todo) => todo.complete === true)) unMarkAllTodos();
    else
      copy.map((todo) => {
        if (!todo.complete) return (todo.complete = true);
        else if (todo.complete) return (todo.complete = true);
      });
    addTodos(copy);
  }

  function unMarkAllTodos() {
    const copy = [...todos];
    copy.map((todo) => (todo.complete = !todo.complete));
    addTodos(copy);
  }

  function setBtnText() {
    if (todos.length < 1) {
      return "Mark All";
    } else {
      if (todos.some((todo) => todo.complete === false)) {
        return "Mark All";
      } else {
        return "Unmark All";
      }
    }
  }

  function deleteMarked() {
    const copy = [...todos];
    const marked = copy.filter((todo) => todo.complete !== true);
    addTodos(marked);
  }

  function enableButton() {
    return todos.some((todo) => todo.complete === true) ? false : true;
  }

  return (
    <div className="card-body p-5 d-flex w-50">
      <input
        className="form-control w-50 mb-1"
        ref={nameRef}
        type="text"
      ></input>
      <button className="btn btn-info ms-2" onClick={addTodo}>
        Add
      </button>
      <button className="btn btn-info ms-2" onClick={markAllTodos}>
        {setBtnText()}
      </button>
      <button
        className="btn btn-info ms-2"
        disabled={enableButton()}
        onClick={deleteMarked}
      >
        Clear Marked
      </button>
      {todos.length > 0 ? (
        <Link to="todo-list" className="btn btn-info ms-2">
          View Todos
        </Link>
      ) : null}
    </div>
  );
}
