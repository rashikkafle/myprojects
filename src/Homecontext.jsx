import React, { useContext } from 'react'
import { Biocontext}from './Contextapi'
 export const Homecontext =()=> {
    const biodata= useContext(Biocontext)
  return (<p>hello its me {biodata.name} and i am {biodata.age} yrs old</p>);
};


