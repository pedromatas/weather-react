import { useState } from "react";
import { TempContext } from "./tempContext.js"

export function TempProvider({value,children}){
 const [grados, setgrados] = useState(value);
    return(

       

        <TempContext.Provider value={[grados,setgrados]}>
        {/* el child component si recuperase el context, su valor seria gl*/}
        {children}
        </TempContext.Provider>
    )
    

}