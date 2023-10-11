import React from 'react'

const TodoForm = ({handleSubmit,setTodo,editId,todo}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Task"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <button type="submit">{editId ? "Edit" : "Go"}</button>
        {/* onclicking the button form will be submit as we have provide the type as submit */}
      </form>
    </div>
  );
}

export default TodoForm
