import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className=" text-center text-5xl text-[#4f4f4f] animate-bounce">
        Hello World
      </h1>
    </div>
  );
}

export default App;
