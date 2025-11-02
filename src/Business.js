import React, { useState } from 'react'
import './App.css';
import products from './products.json'


const type=["pant","shirt","baggy pant","kattu","jacket","trouser","packet"]
function Business() {
 const [query,setquery]=useState("")
 const [suggestion, setsuggestion]=useState([])
 const [clicked, setclicked]= useState(false)

 const filtered =products.filter((p)=>p.type.toLowerCase() === query.toLowerCase())

 const handlechange=(e)=>{
  const value=e.target.value;
  setquery(value);
  const matches= type.filter((word)=>word.toLowerCase().startsWith(value.toLowerCase()));
  if(value ===""){
    setsuggestion([]);

  }
  else{
    setsuggestion(matches);
  }
 }

 
  return (
   <>
<input
type='text'
value={query}
onChange={handlechange}

/>

   <div className='searchsuggestion'>

  {suggestion.map((word, index)=>(
    <li key={index} onClick={()=>setquery(word)}>
      {word}
    </li>
  ))}
  </div>

{query ==="pant"&&(
  <div className='images'>
    <p>welcome to {query} section</p>
    {filtered.map((item,i)=>(
      <>
          <div className='photoclick' onClick={()=>setclicked(item.name)}>
            <img src={item.img} alt={item.name}/>
                          <p>Price:{item.price}</p>

             {clicked === item.name && (<>
           <p>Add to cart</p>
           <p>{item.type}</p>
           </>)}
          </div>
          
      </>
    ))}
    </div>
   
    


  
)}
</>
  )
}

export default Business;
