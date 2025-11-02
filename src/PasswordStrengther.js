import React, { useState } from 'react'

function PasswordStrengther() {
    const [passtype, setpasstype]=useState("");
 let strength=0;
    if(passtype.length>=8)strength++;
    if(/[A-Z]/.test(passtype))strength++;
    if(/[a-z]/.test(passtype))strength++;
    if(/[0-9]/.test(passtype))strength++;
    if (/[^A-Za-z0-9]/.test(passtype))strength++;
  
  console.log(strength);

 
  
  return (
    <>
    <h1>
        PASSWORD STRENGTH CHECKER
    </h1>
    <input 
    type='password'
    placeholder='Enetr a password'
    value={passtype}
    onChange={(e)=>setpasstype(e.target.value)}

    />
    <h1>your password  strength is {strength<=2?<p style={{color:"red"}}>easy</p>:strength<=4?<p style={{color:"green"}}>medium</p>:<p style={{color:"blue"}}>stronger</p>}</h1>
    </>
  )
}

export default PasswordStrengther
