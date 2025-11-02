import React, { useEffect, useState } from 'react'
import {useLocation,  useNavigate } from 'react-router-dom'

function Secondinning() {
   const navigate = useNavigate()
    const handleclick=()=>{ navigate('/Secondinning',
     { state:{
         targetscore,
          yourteam,
         opponentteam,
         selectposition,
         tosswon,
         batfirst
      }}
    )}

    const location = useLocation()
    const {yourteam ,opponentteam, tosswon,selectposition, batfirst}=location.state || {}

    const[inpname, setinpname]= useState('')
    const [name, setname]=useState([])

    const [striker, setstriker]=useState('')
    const [nonstriker, setnonstriker]=useState('')
    const [isstriker,setistriker]= useState(true)
    
    const runs=[0,1,2,3,4,5,6]

    const [strikerrun, setstrikerrun]=useState(0)
    const [nonstrikerrun, setnonstrikerrun]=useState(0)
    const [run,setrun]=useState([])

    const [strikerball, setstrikerball]=useState(0)
    const [nonstrikerball, setnonstrikerball]=useState(0)
    const [ball,setball]=useState([])

    const [iswicket,setiswicket]=useState(false)
    const [okstriker,setokstriker]=useState(true)
    const [isrunout,setisrunout]=useState(false)

    const [baller, setballer]=useState('')
    const [balled ,setballed]=useState(6)
    const [overball,setoverball]=useState([])
    const [totalscore, settotalscore]=useState(0)
    const [ballscore, setballscore]=useState()
    const [isnoballout,setisnoballout]=useState(false)
    const [isrunwithwide,setisrunwithwide]=useState(false)
    const [isnotlegbye,setisnotlegbye]=useState(true)
    const [countover,setcountover]= useState(0)
    const [players,setplayers]=useState([])
    const[bowlers,setbowlers]=useState([])
    const [wicket,setwicket]=useState(0)
    const [targetscore,settargetscore]=useState(0)
    const [over,setover]=useState(0)

    useEffect(()=>{
      if(wicket === 11 || over === 20 ) 
      {
        settargetscore(totalscore +1)
      }
    },[wicket,over,totalscore])

    const wicketchange=()=>{

            if(wicket === 11 || over === 20 ) return
       setballed(balled +1)

       if(isnoballout){
        alert('freehit')
      }else{
               setiswicket(true)
     setwicket(wicket +1)

      }



    }
    const strikerchange=()=>{
      if(striker === '' || nonstriker === '')return;
            if(wicket === 11 || over === 20 ) return

      setname(prev=>[...prev,striker,nonstriker])
      
      
            setokstriker(false)

      
    }
    

    const runchange=(item)=>{
                  if(wicket === 11 || over === 20 ) return

      if (baller === '')return
      setbowlers((prev)=>prev.map(b=>
      b.name===baller ?{...b,wickets: wicket +1, Run: b.Run+item, ballsbowled :b.ballsbowled +1}:b
      ))
      setisnoballout(false)
      if(balled === 5){
        setballer('')
        
      }
      if(isrunwithwide){
           setoverball([...overball,`wd[${item}]`])
           if (item %2 === 1){
         setistriker(!isstriker)
    }
      settotalscore(totalscore +item)
      setisrunwithwide(false)
      } else

     {

      if(isnoballout){
         setoverball([...overball,`Nb[${item}]`])
           if (item %2 === 1){
         setistriker(!isstriker)
    }
      settotalscore(totalscore  +item)
      setisnoballout(false)

      }else{
      settotalscore(totalscore + item)

      setballed(balled +1)
       if(balled <6){
        if(!isnotlegbye){
          setoverball([...overball,`lb[${item}]`])
        }else{
                           setoverball([...overball,item])

        }

       }

       
        
      if(isstriker){
            setstrikerball(strikerball +1)
     if(isnotlegbye){
      setstrikerrun( item + strikerrun)
     }
      
    }
    else{
            setnonstrikerball(nonstrikerball + 1)
        if(isnotlegbye){
      setnonstrikerrun(item + nonstrikerrun)
        }
        setisnotlegbye(true)
    }

    if (item %2 === 1){
         setistriker(!isstriker)
    }
    if(balled === 6)
    {
        setistriker(!isstriker)
        
            
    }
  }
    }
    }
    const handlewicket=()=>{
                   if(wicket === 11 || over === 20 ) return

      
                    setoverball([...overball,'w'])

      
      if(isstriker){
        
        setstriker(inpname)
        setstrikerball(0)
        setstrikerrun(0)
        setinpname('')
       setplayers([...players,{name:striker,runs:strikerrun,ball:strikerball}])
      }else{
        
        setnonstriker(inpname)
        setnonstrikerball(0)
        setnonstrikerrun(0)
                setinpname('')
          setplayers([...players,{name:nonstriker,runs:nonstrikerrun,ball:nonstrikerball}])
             
      }
        
      
      setiswicket(false)
    

    }
    const handleballer=()=>{
                  if(wicket === 11 || over === 20 ) return

      if (baller === '')return;
      if(striker ==='' && nonstriker ==='')return;
      setbowlers((prev)=>{
        if(prev.find((b)=>b.name===baller)) return prev
        return([...prev,{name:baller,Run:0,wicket:0,sixes:0,ballsbowled:0}])
      })

         if(countover!== 0){
                      setistriker(!isstriker)

         }
         setover(over +1)
      setballed(0)
      setoverball([])
      
    }
   const handlecountover=()=>{
     
       setcountover((prev)=>prev +1)
    }
   const handlewide=()=>{
                if(wicket === 11 || over === 20 ) return

     if (baller === '')return;
      if(striker ==='' && nonstriker ==='')return;
      settotalscore(totalscore +1)
      setisrunwithwide(true)
       
      setbowlers(prev=> prev.map(b=> 
        b.name=== baller ?{...b,Run:b.Run +1}:b
      ))
    }
    
    const handlerunout=()=>{
                  if(wicket === 11 || over === 20 ) return

       if (baller === '')return;
      if(striker ==='' && nonstriker ==='')return;
      
      setisrunout(false)
           setiswicket(true)
           setwicket(wicket +1)

    }
    const handlewhorunout=()=>{
      setisrunout(true)
    }
    const handlenoball=()=>{
                  if(wicket === 11 || over === 20 ) return

       if (baller === '')return;
      if(striker ==='' && nonstriker ==='')return;
      settotalscore(totalscore +1)
   setisnoballout(true)
     
      setbowlers(prev=> prev.map(b=> 
        b.name=== baller ?{...b,Run:b.Run +1}:b
      ))
    }

    const handlelegbye=()=>{
      setisnotlegbye(false)
    }
  return (
   <>
  <p>Scorecard :{batfirst}</p>
    { okstriker && (<>
    <input
    placeholder='enter a striker name'
    value={striker}
    onChange={(e)=>setstriker(e.target.value)}
    />
    

    <input
    placeholder='enter a non-striker name'
    value={nonstriker}
    onChange={(e)=>setnonstriker(e.target.value)}
    />
    <button onClick={strikerchange}>OK</button></>)
}
    
    { (balled === 6 && wicket !== 11 && over !== 20) && (<>
    <input
    placeholder='enter a baller name'
    value={baller}
    onChange={(e)=>setballer(e.target.value)}
    />
    <button onClick={()=>{handleballer() ; handlecountover();}}>ok</button>

    </>)}
    


   {players.map((p,index)=>(<>
   <p style={{margin:'2px 0'}}> {p.name} {p.runs} {p.ball}</p>
   </>))}
    {iswicket &&  wicket !== 11 && over!==20 &&(<>
     <input
    placeholder='enter a new batsman name'
    value={inpname}
    onChange={(e)=>setinpname(e.target.value)}
    />
    <button onClick={handlewicket} >OK</button>

    
    </>)}

   {runs.map((item,index)=>(
    <button onClick={()=>{runchange(item); setballscore(item); }} key={index}>{item}</button>
    
   ))}
   <button onClick={wicketchange}>wicket</button>
   <button onClick={handlewide}>wd</button>
   <button onClick={handlenoball}>NB</button>
   <button onClick={handlewhorunout}>RUNOUT</button>
   <button onClick={handlelegbye}>Lb</button>
   {isrunout && (<>
   <button onClick={handlerunout}>{striker}</button>
   <button onClick={handlerunout}>{nonstriker}</button>
   </>)}

     {striker !== '' && (<>
         <p> {striker} {strikerrun} {strikerball}</p>

     </>)}
     {nonstriker !=='' && (<>
         <p>{nonstriker} {nonstrikerrun} {nonstrikerball}</p>

     </>)}
       {baller !== ''&& (<>
           <p> {baller}: {overball}</p>

       </>)}
      
    {targetscore === 0 ? <p>totalscore:{totalscore}-{wicket}</p> :<p> Target-{targetscore}</p> }

    {bowlers.map((p,i)=>{
     

      const overint=Math.floor(p.ballsbowled/6)
      const ballint=p.ballsbowled %6
      const overdisplay =`${overint}.${ballint}`
      const over= p.ballsbowled/6

     const economy= p.ballsbowled> 0 ?(p.Run/over).toFixed(2):"0.00"
     return(
      <>
    <p>{p.name} {overdisplay} {p.Run} {p.wicket} {economy}</p>
    </>)})}

    {(wicket === 11 || over ===10 )&& <button onClick={handleclick}>Lets begin 2nd inning</button>}
   
    </>
    )
   
  
}

export default Secondinning
