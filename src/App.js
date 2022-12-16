import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  let toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <TextForm heading = "Enter to analyze the text" mode={mode} />
    {/* <About/> */}
    </>
  );
}

export default App;
