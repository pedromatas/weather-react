import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';
import { useState } from 'react';
import d1 from '../../static/assets/ICONS_1X/ICONS_DAY/01d.png';
import d2 from '../../static/assets/ICONS_1X/ICONS_DAY/02d.png';
import d3 from '../../static/assets/ICONS_1X/ICONS_DAY/03d.png';
import d4 from '../../static/assets/ICONS_1X/ICONS_DAY/04d.png';
import d9 from '../../static/assets/ICONS_1X/ICONS_DAY/09d.png';
import d10 from '../../static/assets/ICONS_1X/ICONS_DAY/10d.png';
import d11 from '../../static/assets/ICONS_1X/ICONS_DAY/11d.png';
import d13 from '../../static/assets/ICONS_1X/ICONS_DAY/13d.png';
import d50 from '../../static/assets/ICONS_1X/ICONS_DAY/50d.png';
import maxIcon from "../../static/assets/ICONS_1X/RESTO DE ICONOS/max.png";


export default function CardDias(props) {


    function imagen(img) {
        switch (img) {
            case '01d':
                return d1;

            case '02d':
                return d2;

            case '03d':
                return d3;

            case '04d':
                return d4;

            case '09d':
                return d9;

            case '10d':
                return d10;

            case '11d':
                return d11;

            case '13d':
                return d13;

            case '50d':
                return d50;

            default:
                break;
        }
    }

    function capitalizarPrimeraLetra(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }


    function fecha(timestamp) {
        let options = {
            weekday: "long"

        };


        let fecha = timestamp;

        fecha = new Date(timestamp * 1000).toLocaleString("es", options);


        return fecha
    }
    return (

        <Card color="secondary" sx={{ maxWidth: 345, background: "#24446D", color: "#EEEEEE" }}>
            <CardActionArea sx={{ display: 'block' }} >
                <Typography component="div" variant="p" sx={{ display: 'block', justifyContent: 'space-between', margin: 1 }}>

                    {fecha(props.dia?.dt).toUpperCase()}
                    <div className="hl"></div>
                    {/* {'\n'+props.ciudadHoras.current?.feels_like}  */}
                    <CardMedia
                        component="img"
                        height="140"
                        image={imagen(props.dia?.weather[0].icon) }


                    />
                </Typography>
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>



                    <CardMedia
                        component="img"
                        height="40"
                        image={maxIcon}


                    />{props.dia?.temp.max}
                </Typography>
                <Typography component="div" variant="p" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1 }}>



                    <CardMedia
                        component="img"
                        height="40"
                        image="/static/images/cards/contemplative-reptile.jpg"


                    />{props.dia?.temp.min}
                </Typography>


            </CardActionArea>

        </Card>
    );
}