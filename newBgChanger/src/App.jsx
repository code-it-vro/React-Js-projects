import { useState } from "react";
import "./App.css";
import Counter from "./components/counter";

function App() {
  const [color, setColor] = useState("grey");

  return (
    <div>
      <div className="back" style={{ backgroundColor: color }}>
        <button
          onClick={() => {
            setColor("Red");
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
        >
          blue
        </button>
      <Counter />
      </div>
    </div>
  );
}

export default App;
