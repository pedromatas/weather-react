import react from "react"
import { useState } from "react";
import Prueba from "../components/pruebas.jsx";

function Main() {

    let [ciudad,setciudad]= useState('MADRID');

   const buscador = (e)=>{
       e.preventDefault();
    console.log(e.target.textCiudad.value)
    setciudad(e.target.textCiudad.value)

        
   }

    return (
        <div>
            <form onSubmit={buscador} action="">
                 <input type="text" name="textCiudad"/> 
                 <button type="submit">Buscador</button>
            </form>
          
            <Prueba ciudad={ciudad}></Prueba>
        </div>
        
    )
}

export default Main;