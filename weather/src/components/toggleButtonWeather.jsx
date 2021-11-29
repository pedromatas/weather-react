import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import './toggleButtonWeather.css';

export default function ToggleButtonWeather(props) {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(event)
  };

  const [seleccionado, setSeleccionado] = useState('');
  const [seleccionado2, setSeleccionado2] = useState('selected');
  

  const seleccionado1=e=>{
    seleccionado==="selected"? setSeleccionado(''):setSeleccionado('selected');
    seleccionado2==="selected"? setSeleccionado2(''):setSeleccionado2('selected');
    props.click()
  }

  return (
    <ToggleButtonGroup 
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}style={{
        backgroundColor: "#24446D",
        padding: "0.125rem",
        width:"95px",
        height:"48px",
        borderRadius: 50,
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    }}>
      
    
      <ToggleButton value="c" selected className={seleccionado} onClick={seleccionado1} style={{
                borderRadius: 80,
                backgroundColor: "#19304D",
                marginRight:"10px",
                height: "35px",
                width:"35px",
                fontSize: "1.063rem",
                padding:"15px",
                
                
                
    }} variant="contained" color="secondary">
°C
            </ToggleButton>
      <ToggleButton value="f" className={seleccionado2} onClick={seleccionado1} style={{
                borderRadius: 80,
                backgroundColor: "#19304D",
                height: "35px",
                width: "35px",
                fontSize: "1.063rem",
                padding:"15px"
            }} variant="contained" color="secondary">°F</ToggleButton>
      
    </ToggleButtonGroup>
  );
}