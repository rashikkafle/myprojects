import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import './index.css';


function Cricket() {
const navigate= useNavigate()
const handle=()=>{
    navigate('/CricSc',{
      state:{
         yourteam,
         opponentteam,
         selectposition,
         tosswon,
         batfirst
      }
    })
}

 const [clicked,setclicked]= useState(false)
 const [yourteam, setyourteam]= useState('')
 const[opponentteam, setopponentteam]=useState()
const [tosssubmitted,settosssubmitted]=useState(false)
const [tosswon, settosswon]=useState()
const [position ,setposition]=useState(false)
const [selectposition, setselectposition]= useState()
const [batfirst, setbatfirst]= useState()

useEffect(()=>{
   if(tosswon === yourteam && selectposition === 'bat'){
   setbatfirst(yourteam);
}else if (tosswon === opponentteam  && selectposition === 'bat')
{
   setbatfirst(yourteam);
}
else if(tosswon === opponentteam && selectposition === 'bowl')
{
   setbatfirst(yourteam);
}else if (tosswon === yourteam  && selectposition === 'bowl')
{
   setbatfirst(opponentteam);
}else{
   console.log('error')
}
},[tosswon,selectposition,yourteam,opponentteam])


 const handleclick=()=>{
    setclicked(true)
 }

 const handletoss=(e)=>{
    settosswon(e.target.value)
    settosssubmitted(true)
 }

 const handleposition=(e)=>{
   setposition(true)
  setselectposition(e.target.value)


 }
  return (
   <>
   <div className=''>
   <p className='text-center text-blue-500'> Hello Cricket</p>
   
   {!clicked && (
    <>
    <input
   type='text'
   placeholder='Enter your team name'
   value={yourteam}
   onChange={(e)=> setyourteam(e.target.value)}
   />
   <input
   type='text'
   placeholder='Enter opponent team name'
   value={opponentteam}
    onChange={(e)=> setopponentteam(e.target.value)}
   />
<button onClick={handleclick}>Done</button>

    </>
    
   )}
   </div>

   {clicked && (
    <>

   <p>{yourteam} VS {opponentteam}</p>

 { !tosssubmitted && (
    <>
     <p>Toss</p>
      <label>
   <input
   type='radio'
   name='toss'
   value={yourteam}
   onChange={handletoss}
   />
   {yourteam}
</label>

   <label >
   <input
   type='radio'
   name='toss'
   value={opponentteam}
   onChange={handletoss}
   />
   {opponentteam}
</label>
    </>
 )}
    </>
   )}
{ tosssubmitted && (
    <>
    {!position && (
      <>
          <p>{tosswon} choose :</p>

       <label >
   <input
   type='radio'
   name='bat'
   value='bat'
   onChange={handleposition}
   />
   <p>Bat</p>
</label>

 <label>
   <input
   type='radio'
   name='bat'
   value='bowl'
   onChange={handleposition}
   />
   <p>Bowl</p>
</label>
      </>
    )}
    </>
)}
{position && (
   <>
   <p>{tosswon} won the toss and choose to {selectposition} first</p>
   </>
)}

   

   <button onClick={handle}>Bounce</button>
   </>
  )
}

export default Cricket
