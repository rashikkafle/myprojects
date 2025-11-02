import React, { useState } from 'react'
import './App.css';

function Quiz() {
    const quizdata=[
        {
            qsn:"What is the first letter of alphabet?",
            opt:["A","B","C","D"],
            soln:"A"
        },
        {
            qsn:"what is the capital city of nepal?",
            opt:["Nawalpur","kathmandu","Lalitpur","Bhaktapur"],
            soln:"kathmandu"
        }
    ]
    const [question,setquestion]=useState(0);
    const [score, setscore]=useState(0);
    const [result,showresult]=useState(false);

    let handleclick=(opts)=>{
if(opts === quizdata[question].soln){
    setscore(score +1);
}

const nxtqsn= question +1;
if (nxtqsn<quizdata.length)
{
    setquestion(question +1);
    
}
else{
    showresult(true);

}
 
    }
    let restart=()=>{
        setquestion(0);
        setscore(0);
        showresult(false);
    }
  return (
   <>
   <div className='quiz-box'>
    <h1>{score}/{quizdata.length}</h1>
   {result?(
    <div className='quix-score'>
     <h1>your total score is{score}</h1>
    </div>
   ):
   <div className='quiz-qsn'>
    <p>{quizdata[question].qsn}</p>
    {quizdata[question].opt.map((opts)=>(
        <button key={opts} onClick={()=>handleclick(opts) }
        
        >{opts}</button>
    ))}
    </div>}
    <button onClick={restart}
    
    style={{
        backgroundColor:"greenyellow",
        borderRadius:"12px"
    }}>Restart</button>

   </div>
   </>
  )
}

export default Quiz
