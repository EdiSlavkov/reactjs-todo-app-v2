export default function TodoContainer({ data }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <img className="logo" src="todo.png" alt="logo"></img>
      {data}
    </div>
  );
}
