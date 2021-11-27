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
      
        <Card color="secondary" sx={{ maxWidth: 345, background:"#24446D" , color:"#FFC13D" }}>
            <CardActionArea sx={{ display: 'block'}} >
            <CardMedia sx={{ marginLeft: 4 }}
                        component="img"
                        height="140"
                        image={gif}


                    />
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
              
                    Sensación térmica
                    {'\n'+props.ciudadHoras?.current?.feels_like}
                </Typography>


            </CardActionArea>

        </Card>
    );
}