import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './index.css';
import d1 from '../../static/assets/ICONS_2X/ICONS_DAY/01d.png';

import d2 from'../../static/assets/ICONS_2X/ICONS_DAY/02d.svg';
import d3 from'../../static/assets/ICONS_2X/ICONS_DAY/03d.svg';
import d4 from'../../static/assets/ICONS_2X/ICONS_DAY/04d.svg';
import d9 from'../../static/assets/ICONS_2X/ICONS_DAY/09d.svg';
import d10 from'../../static/assets/ICONS_2X/ICONS_DAY/10d.svg';
import d11 from'../../static/assets/ICONS_2X/ICONS_DAY/11d.svg';
import d13 from'../../static/assets/ICONS_2X/ICONS_DAY/13d.svg';
import d50 from'../../static/assets/ICONS_2X/ICONS_DAY/50d.svg';
import rain from'../../static/assets/ICONS_1X/RESTO DE ICONOS/rain.svg';

export default function CardGrados(props) {

    function capitalizarPrimeraLetra(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }
    function calculo(dato){
       let data= dato??0
      
       return data;
    }
    
    function imagen(img) {
        console.log(img)
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

    function fecha(timestamp) {
        let options = {
            weekday: "long",
            // year: "numeric",
            // month: "2-digit",
            month: "short",
            day: "numeric"
        };
        console.log()

        let fecha = timestamp;

        fecha = new Date(timestamp * 1000).toLocaleString("es", options);

        //    setFecha(new Date(timestamp).toLocaleString("es",options))

        console.log(fecha)
        return fecha
    }
 
    return (

        <Card color="primary" sx={{ maxWidth: 540,maxHeight:360, backgroundColor: '#24446D', color: '#EEEEEE',borderRadius:"2rem",padding:"1.688rem" }}>
            <CardActionArea >
                <Typography component="div" variant="h4" sx={{ display: 'flex', justifyContent: 'space-between', margin: 1,fontSize:"48px" }}>
                    {capitalizarPrimeraLetra(fecha(props.ciudadHoras.daily?.[0].dt))}
                </Typography>

                <CardContent>
                    <div className="contenedor-grados">
                        <Typography gutterBottom variant="h2" component="div" sx={{width:"180px" ,fontSize:"130px"}}>
                            {Math.round(props.ciudadHoras.current?.temp)}º

                        </Typography>
                        <div className="vl"></div>
                        <img src={imagen(props.ciudadHoras.current?.weather[0].icon) } alt="" className="card_img-temp" />
                      

                    </div>
                </CardContent>


                <Typography component="p" sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <p className="p-desc">{capitalizarPrimeraLetra( props.ciudadHoras.current?.weather[0].description)}</p>
                   
                  <img src={rain} alt="" className="img-lluvia" />
                   
                    <Typography component="p" sx={{fontSize:"1.5rem"}}>
                        {Math.round( calculo(props.ciudadHoras.current?.rain?.["1h"]))}mm
                    </Typography>
                </Typography>



            </CardActionArea>

        </Card>
    );
}