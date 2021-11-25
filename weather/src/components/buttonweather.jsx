import React from "react";
import { Button } from '@material-ui/core';




function ButtonWeather() {
    
    return (
        <div className="Group-fc" style={{
            backgroundColor: "#C4C4C4",
            padding: "15px",
            width: "180px",
            borderRadius: 50,
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Button style={{
                borderRadius: 50,
                backgroundColor: "#232323",
                height: 35,
                width: 35,
                fontSize: "2rem",
                padding:"30px"
            }} variant="contained" color="secondary">
               
°C
            </Button>
            <Button style={{
                borderRadius: 80,
                backgroundColor: "#232323",
                opacity: 0.4,
                height: 35,
                width:35,
                fontSize: "2rem",
                padding:"30px"
                
    }} variant="contained" color="secondary">
°F
            </Button>
        </div>
    );
}

export default ButtonWeather;