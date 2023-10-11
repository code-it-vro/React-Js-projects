import React from "react";

const AllTodo = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div>
      <ul className="allTodos">
        {todos.map((event) => (
          <li className="singleTodo">
            <span className="todoText" key={event.id}>
              {event.todo}
            </span>

            <button
              onClick={() => {
                handleEdit(event.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                handleDelete(event.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllTodo;
