import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';
import { useState } from 'react';
// import gif from "../../static/assets/GIFS/avion.gif"
import gif from "../../static/assets/GIFS/avion.gif";


export default function CardMapa(props) {

    function capitalizarPrimeraLetra(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
      }

    function contador(){

    }
  

    return (
      
        <Card color="secondary" sx={{ maxWidth: 255,maxHeight:360, background:"#24446D" , color:"#FFC13D", borderRadius:"2rem",padding: "32px 23px 64px 23px" }}>
            <CardActionArea sx={{ display: 'block'}} >
                    <img src={gif} alt="" className="gif"/>
                <Typography component="div" variant="p" sx={{  width:"11.063rem" , marginLeft:"2.3rem" ,fontSize:"19px",marginTop:"14px"}}>
              
                   Queda 1h 45min para llegar a tu destino
                </Typography>


            </CardActionArea>

        </Card>
    );
}