import React from "react";

const Todos = (props) => {


  return (
    <>
      <div className="todo_style">
        <li>{props.text}</li>
        <button onClick={()=>{props.onSelect(props.id)}}>X</button>
      </div>
    </>
  );
};

export default Todos;
