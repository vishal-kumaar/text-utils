import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  let showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    
    setTimeout(()=>{
      setAlert(null);
    }, 2000)
  }
  let toggleMode = () => {
    if (mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.title = "TextUtils - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert} />
    <TextForm heading = "Enter to analyze the text" mode={mode} showAlert={showAlert} />
    {/* <About/> */}
    </>
  );
}

export default App;