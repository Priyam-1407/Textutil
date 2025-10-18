import React from 'react'
import { useState } from 'react'
export default function Textform(props) {
 const [text, setText] = useState(""); // <-- Add this line
 const [alert, setAlert] = useState(null); 

  const showalert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
  };
   const handleupclick=()=>{
    console.log("text is changed to upper case")  
    setText(text.toUpperCase())
     props.showalert("converted to upper case","success");
   };
  
    const handleloclick=()=>{
    console.log("text is changed to lower case")  
    setText(text.toLowerCase())
    props.showalert("converted to lower case","success");
   };


   const handleonchange=(event)=>{
      console.log("on change");
      setText(event.target.value);//this will allow to edit the text

    }
    const handlecopy=()=>{
      console.log("i am copy");
      var text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("text copied to clipboard","success");
    } ;
    return(
<div className="container">
    <h1>{props.heading}</h1>
       <div className="mb-3">
      <label htmlFor="MyText" className="form-label">My box</label>
      <textarea showalert={showalert} className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'black'}}id="exampleFormControlTextarea1" onChange={handleonchange} rows="3" ></textarea>
     </div>
<button className='btn btn-primary mx-2' onClick={handleupclick}>convert to uppercase</button>
<button className='btn btn-primary' onClick={handleloclick}>convert to lowercase</button>
<button className='btn btn-primary mx-2' onClick={handlecopy}>copy text</button>
   </div>
    );
  
}
