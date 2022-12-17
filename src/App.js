import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/" element={<TextForm heading = "Enter to analyze the text" mode={mode} showAlert={showAlert} />}></Route>
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About mode={mode}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;