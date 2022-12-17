import React, {useState} from 'react'

function TextUtils(props) {
  const [text, setText] = useState("");

  let convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to uppercase.", "success")
  }
  
  let convertToLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lowercase.", "success")
  }
  
  let reverseText = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text reversed.", "success")
  }
  
  let copyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard.", "success")
  }
  
  let removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space removed.", "success")
  }
  
  let clearAll = () => {
    setText("");
  }

  let handleOnChange = (event) => {
    setText(event.target.value);
  }

  let words = text.split(" ").filter((element) => {return element.length!==0}).length;

  return (
    <>
    <div className="container mt-4 mb-3">
        <h1 style={{color: props.mode === "light" ? "black" : "white"}}>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor: props.mode === "light" ? "white" : "black", color: props.mode === "light" ? "black" : "white"}}></textarea>
        <button className="btn btn-primary mt-3" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={convertToLowercase}>Convert to Lowercase</button>
        <button className="btn btn-primary mt-3" onClick={reverseText}>Reverse Text</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={copyText}>Copy Text</button>
        <button className="btn btn-primary mt-3" onClick={removeExtraSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mt-3 mx-2" onClick={clearAll}>Clear All</button>
    </div>
    <div className="container" style={{color: props.mode === "light" ? "black" : "white"}}>
      <h2>Your text summary</h2>
      <p>{words} words and {text.length} characters</p>
      <p>{0.008 * words} minutes read</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter something in the text above to preview it here"}</p>
    </div>
  </>
  )
}

export default TextUtils;