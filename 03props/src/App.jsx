import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardThree } from "./components/card";

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <>
      <CardThree username="Faheem" />
      <CardThree />
    </>
  );
}

export default App;
