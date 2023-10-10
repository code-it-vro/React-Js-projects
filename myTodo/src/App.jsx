import { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((prev) => {
      return [...prev, inputList];
    });
    setInputList("");
  };

  const deleteItem = (id) => {
    setItems((prev) => {
      return prev.filter((val, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo List</h1>
          <br />
          <input
            type="text"
            placeholder="Add your Task"
            value={inputList}
            onChange={itemEvent}
          />
          <button onClick={listOfItems}>Add</button>

          <ol>
            {items.map((itemVal, index) => {
              return (
                <Todos
                  key={index}
                  id={index}
                  text={itemVal}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
