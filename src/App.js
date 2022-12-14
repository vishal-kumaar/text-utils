import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";

function App() {
  return (
    <>
    <Navbar title="TextUtils"/>
    <TextForm heading = "Enter to analyze the text" />
    <About/>
    </>
  );
}

export default App;
