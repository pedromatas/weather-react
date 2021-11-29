import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';




export default function ChipDias(props) {

  
    function fecha(timestamp){
        let options = {
            
            // year: "numeric",
            // month: "2-digit",
            month:"long",
            day: "numeric"
        };
        
    
     let fecha=timestamp;
    
        fecha= new Date(timestamp*1000).toLocaleString("es",options);
        
    //    setFecha(new Date(timestamp).toLocaleString("es",options))
        
      
       return fecha
    }
  return (
    <Stack direction="row">
      <Chip  sx={{ marginRight:"27px",maxWidth:"10rem",background:"#24446D" , color:"#EEEEEE", width:"11rem",height:"2.75rem",
       borderRadius:"32px", padding:"10px 10px 14px 10px", fontSize:"15px", fontFamily: "aeonik_regular",boxShadow:" 0px 4.19632px 16.7853px rgba(0, 0, 0, 0.15)"}} label={fecha(props.dia?.dt) } />
    </Stack>
  );
}