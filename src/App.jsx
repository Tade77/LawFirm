import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Molecules/Nav/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1 className=" text-center text-5xl text-[#4f4f4f] animate-bounce">
        Hello World <NavBar />
      </h1>
    </div>
  );
}

export default App;
