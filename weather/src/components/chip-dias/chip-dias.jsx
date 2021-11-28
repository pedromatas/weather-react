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
      <Chip  sx={{ marginRight:"37px",minWidth:"12.7rem",background:"#24446D" , color:"#EEEEEE", width:"11rem",height:"2.75rem",
       borderRadius:"32px", padding:"10px 10px 14px 10px", fontSize:"17px"}} label={fecha(props.dia?.dt) } />
    </Stack>
  );
}