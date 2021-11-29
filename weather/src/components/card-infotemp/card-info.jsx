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

        <Card color="primary" sx={{ marginLeft:"0.7rem",maxWidth: 254,minWidth:254, maxHeight: "360px", borderRadius: "2rem", padding: "32px 23px 64px 23px", background: "#24446D", color: "#EEEEEE",boxShadow:"0px 10px 20px rgba(0, 0, 0, 0.15)" }}>
            <CardActionArea sx={{ display: 'block' }} >
                {/* <Typography component="div" variant="p" sx={{ height: "46", display: 'flex', justifyContent: 'space-between', margin: 1 }}>
                    <img src={grados} alt="" className="img" />

                    Sensación térmica
                    <p>{'\n' + props.ciudadHoras.current?.feels_like}</p>


                </Typography> */}
                <div className="contenedor-info img-humedad">
                    <div className="icono">
                        <img src={grados} alt="" className="img" />
                    </div>

                    <div className="contenedor-texto">
                        <p> Sensación térmica</p>
                        <p className="p-numero">{ props.ciudadHoras.current?.feels_like}º</p>

                    </div>


                </div>
                <div className="contenedor-info img-humedad">
                    <div className="icono">
                        <img src={humedad} alt="" className="img " />
                    </div>

                    <div className="contenedor-texto">
                        <p>Humedad</p>
                        <p className="p-numero">{ props.ciudadHoras.current?.humidity}%</p>

                    </div>


                </div>
                <div className="contenedor-info img-humedad">
                    <div className="icono">
                        <img src={uv} alt="" className="img " />
                    </div>

                    <div className="contenedor-texto">
                        <p>  Índice de UV</p>
                        <p className="p-numero">{ props.ciudadHoras.current?.uvi} de 10</p>

                    </div>


                </div>
                <div className="contenedor-info img-humedad">
                    <div className="icono">
                        <img src={viento} alt="" className="img " />
                    </div>

                    <div className="contenedor-texto">
                        <p className="p-numero">Viento</p>
                        <p className="p-numero">{props.ciudadHoras.current?.wind_speed} km/h</p>

                    </div>


                </div>


            </CardActionArea>

        </Card>
    );
}