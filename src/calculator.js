import React, { useState } from 'react'
import './App.css';

function Calculator() {
    const buttons=["7","8","9","*","4","5","6","/","1","2","3","+","0","-"];
    const [input, setinput]=useState("");
    const handleclick=(prev)=>{
setinput(input + prev);
    }
    const calculate=()=>{
        setinput(eval(input).toString());
    }
    const clear=()=>{
        setinput("0");
    }
    const deletes=()=>{
     setinput((prev)=> prev.slice(0,-1));
    }
  return (
   <>
   <div className='outer'>
    <h1>CALCULATOR</h1>
   <div className='result'>
   <input
   type='text'
   value={input}
   readOnly
   />
   </div>
  {buttons.map((item,index)=>(
    <button key={index} onClick={()=>( handleclick(item))}>{item}</button>
  ))}
  <button onClick={clear}>AC</button>
  <button onClick={deletes}>C</button>
  <button onClick={calculate}>=</button>
   </div>
   </>
  )
}

export default Calculator
