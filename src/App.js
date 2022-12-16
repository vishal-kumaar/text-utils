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
      showAlert("Dark mode has been enabled.", "success")
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode has been disabled.", "success")
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