import React, { createContext } from 'react'


   export const Biocontext = createContext();
   export const Bioprovider=({children})=>{
       const biodata={
          name:"",
          age:24
       };
        return   ( <Biocontext.Provider value={biodata}>{children}</Biocontext.Provider>);

   }