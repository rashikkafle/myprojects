import React, { useState } from 'react'

function Todo() {
    const [todo, settodo]=useState([]);
    const [input,setinput]=useState("");
    const handlechange=()=>{
        if(input !==''){

            settodo([...todo,input]);
            setinput("");
        }
      
    }
    const removetask=(index)=>{
        settodo(todo.filter((_,i)=>i !== index));
    };

  return (
    <>
    <h1>TODO LIST</h1>
    <input
    type='text'
    placeholder='Enter the list to do'
    value={input}
    onChange={(e)=>(setinput(e.target.value))}
    />
        <button onClick={handlechange}>ADD</button>

    {todo.map((item,index)=>(
       <li key={index}>
      <span>{item}</span>
         <button onClick={()=>removetask(index)} style={{margin:"2px"}}> D</button>

       </li>
        
    ))}
    </>
  )
}

export default Todo
