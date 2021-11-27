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
    <Stack direction="row"  >
      <Chip  sx={{ background:"#24446D" , color:"#EEEEEE"}} label={fecha(props.dia?.dt) } />
    </Stack>
  );
}