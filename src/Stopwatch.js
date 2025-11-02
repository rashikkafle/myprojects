import React, { useEffect, useRef, useState } from 'react'

function Stopwatch() {
   const [time,settime]=useState(0)
   const[ isrunning, setisrunning]=useState(false)// using this prevents the diff in interval while clicking start multiple times
   const intervalRef= useRef(null)

   const start=()=>{
    if (!isrunning){
        setisrunning(true);
        intervalRef.current=setInterval(()=>{settime((prev)=> prev +1)},1000)//1000 represent interval in milisecond
    }// we dont use usestate because every time interval changes it would triggered and re-render and every time it re-render new interval create
   }

   const stop=()=>{
    setisrunning(false);
    clearInterval(intervalRef.current);

   }
   const reset=()=>{
    setisrunning(false);
    settime(0);
    clearInterval(intervalRef.current);
   }

return(
<>
<button onClick={start}>Start</button>
<button onClick={stop}>Stop</button>
<button onClick={reset}>Reset</button>
<p>{time}</p>
</>
);

}
export default Stopwatch
