import React, {useState} from 'react'

function TextUtils(props) {
  const [text, setText] = useState("Enter any text...");

  let convertToUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText)
  }

  let handleOnChange = (event) => {
    setText(event.target.value);
  }

  return (
    <div className="container mt-4">
        <h2>{props.heading}</h2>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="12"></textarea>
        <button className="btn btn-primary mt-3" onClick={convertToUppercase}>Convert to Uppercase</button>
    </div>
  )
}

export default TextUtils;