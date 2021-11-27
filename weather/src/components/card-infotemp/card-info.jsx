import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';
import { useState } from 'react';
import grados from "../../static/assets/ICONS_1X/RESTO DE ICONOS/Thermometer.png";
import humedad from "../../static/assets/ICONS_1X/RESTO DE ICONOS/Humidity.png";
import uv from "../../static/assets/ICONS_1X/RESTO DE ICONOS/UVIndex.png";
import viento from "../../static/assets/ICONS_1X/RESTO DE ICONOS/Wind.png";

export default function CardInfo(props) {

    function capitalizarPrimeraLetra(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }


    return (

        <Card color="primary" sx={{ maxWidth: 345, background: "#24446D", color: "#EEEEEE" }}>
            <CardActionArea sx={{ display: 'block' }} >
                {/* <Typography component="div" variant="p" sx={{ height: "46", display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    <img src={grados} alt="" className="img" />

                    Sensación térmica
                    <p>{'\n' + props.ciudadHoras.current?.feels_like}</p>


                </Typography> */}
                <div className="contenedor-info">
                    <div className="icono">
                         <img src={grados} alt="" className="img" />
                    </div>
                   
                    <div className="contenedor-texto">
                          <p> Sensación térmica</p>
                    <p>{'\n' + props.ciudadHoras.current?.feels_like}</p>

                    </div>
                 

                </div>
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    <img src={humedad} alt="" className="img" />

                    Humedad{"\n"}
                    <Typography component="div" variant="p" sx={{ display: "block" }}>
                        {'\n' + props.ciudadHoras.current?.humidity + '\n'}
                    </Typography>

                </Typography>
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    <img src={uv} alt="" className="img" />
                    Índice de UV
                    {'\n' + props.ciudadHoras.current?.uvi}
                </Typography>
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    <img src={viento} alt="" className="img" />
                    Viento
                    {'\n' + props.ciudadHoras.current?.wind_speed + ' km/h'}
                </Typography>



            </CardActionArea>

        </Card>
    );
}