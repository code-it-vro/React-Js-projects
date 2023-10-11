import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import AllTodo from "./components/AllTodo";

function App() {
  const [todo, setTodo] = useState(""); // this is for every task i.e single todo
  const [todos, setTodos] = useState([]); // we are taking an array and add all the task in it one by one
  const [editId, setEditId] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault(); // this will prevent submiting the form as soon as we reach to this function
    if (editId) {
      // if there is something in editSpace then
      const editTodo = todos.find((event) => event.id === editId); // we will find that particular todo with same id
      // now we will map and replce then id with the id we found and its todo also
      const updateTodos = todos.map((i) =>
        i.id === editTodo.id
          ? (i = { id: i.id, todo })
          : { id: i.id, todo: i.todo }
      );
      setTodos(updateTodos); // updating the todos by passing the changes done by edit
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };
  const handleDelete = (id) => {
    const deleteTodo = todos.filter((to) => to.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((to) => to.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo List App</h1>
        <TodoForm
          todo={todo}
          editId={editId}
          setTodo={setTodo}
          handleSubmit={handleSubmit}
        />

        <AllTodo
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          todos={todos}
        />
      </div>
    </div>
  );
}

export default App;
