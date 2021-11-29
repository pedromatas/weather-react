import react from "react"
import { useState, useEffect, useContext } from "react";
import API from "../apiKey.js"
import { TempContext } from "../context/tempContext.js";
import ToggleButtonWeather from "../components/toggleButtonWeather.jsx";
import './index.css';
import { Grid,Box } from "@mui/material";
import CardGrados from "../components/card-grados-pr/card-grados.jsx";
import CardInfo from "../components/card-infotemp/card-info.jsx";
import ChipDias from "../components/chip-dias/chip-dias.jsx";
import CardDias from "../components/card-dias/card-dias.jsx";
import CardMapa from "../components/card-mapa/card-mapa.jsx";
import fondo from "../static/assets/GIFS/videofinal.gif";
import lupa from "../static/assets/ICONS_1X/RESTO DE ICONOS/Buscar.svg";
import Aeonik_regular from "../static/assets/TIPOGRAFIA/Aeonik-Regular.woff"
import Aeonik_bold from "../static/assets/TIPOGRAFIA/Aeonik-Bold.woff"


function Main() {
    const [temp, settemp] = useContext(TempContext);
    let [ciudad, setciudad] = useState('madrid');
    let [lat, setLat] = useState('');
    let [long, setLong] = useState('');
    let [ciudadDia, setfetch] = useState({});
    let [fetchHora, setfetchHora] = useState({});
    let fecha = {};



    useEffect(() => {

        // geolocalizacion


        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);

            setLat(position.coords.latitude);

            setLong(position.coords.longitude);
            async function fetchData() {

                let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&lang=es&units=${temp}&appid=${API}`)
                let hour = await hourly.json();
                // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
                console.log(hour, 'asjdajf')
                setfetchHora(hour);
                console.log(fetchHora, 'primer fetch')


            }
            fetchData();

        });


    }, []);



    const buscador = (e) => {
        e.preventDefault();
        console.log(e.target.textCiudad.value)
        setciudad(e.target.textCiudad.value)
        async function fetchData() {
try {
       let prueba = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.textCiudad.value}&lang=es&appid=${API}`)
            let r = await prueba.json();
            setfetch(r)
            console.log(r)

            setLat(r.coord.lat);
            console.log(r.coord.lat)
            setLong(r.coord.lon);
            console.log(r.coord.lon)



            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r.coord.lat}&lon=${r.coord.lon}&units=${temp}&lang=es&appid=${API}`)
            let hour = await hourly.json();
            setfetchHora(hour);
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            console.log(hour, 'zimbaue')
} catch (error) {
    console.log(error)
    setciudad('No existe')
}
         
                         
       
        }
        fetchData()

    }

    function capitalizarPrimeraLetra(str) {
        return str?.charAt(0).toUpperCase() + str?.slice(1);
    }

    let metrica = '';
    const handleClick = e => {
        temp === 'metric' ? metrica = 'imperial' : metrica = 'metric';
        temp === 'metric' ? settemp('imperial') : settemp('metric');
        console.log(temp)
        async function fetchData() {




            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${metrica}&lang=es&appid=${API}`)
            let hour = await hourly.json();
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            setfetchHora(hour)
            console.log(hour)
        }
        fetchData()
    }
    function calcfecha(timestamp) {
        let options = {
            hour: "2-digit",
            minute: "2-digit"


        };


        let fecha = timestamp;

        fecha = new Date(timestamp * 1000).toLocaleTimeString("es",options);


        return fecha
    }

    return (
        <div className="contenedor-general">
          
            <Grid container spacing={2} direction="column">
                <Grid item container spacing={1.5}>

                    <Grid item xs={1.2} >
                        <ToggleButtonWeather click={handleClick} sx={{height:"48"}}></ToggleButtonWeather>
                    </Grid>
                   
                    <Grid item xs={6} sx={{display:"flex"}}>
                        <p className="texto-ciudad">{capitalizarPrimeraLetra(ciudad) }, {calcfecha(fetchHora.current?.dt)}h</p>

                    </Grid>
                    <Grid item xs={0.8} >
                       
                    </Grid>
                    <Grid item xs={4}>
                        <form onSubmit={buscador} action="" className="form">
                           
                            <input type="text" name="textCiudad" className="buscador" placeholder="Buscar..." />
                            {/* <button type="submit">Buscador</button> */}
                             <input type="image" src={lupa} alt="lupa" className="lupa"/>
                        </form>
                    </Grid>

                </Grid>
                <Grid item container >

                    <Grid item xs={6}>
                        <CardGrados ciudad={ciudadDia} ciudadHoras={fetchHora}></CardGrados>
                    </Grid>
                    <Grid item xs={3}>
                        <CardInfo ciudad={ciudadDia} ciudadHoras={fetchHora}></CardInfo>

                    </Grid>
                    <Grid item xs={3}>
                        <CardMapa></CardMapa>
                    </Grid>

                </Grid>
                
                <div className="contenedor-semana scroll1">
                    
                    <div className="contenedor-dias">
                          {fetchHora.daily?.map(d=>
                     
                        <ChipDias dia={d}></ChipDias>
                    
                    )}
                
                    </div>
              

                    <div className="contenedor-cards">
                         {fetchHora.daily?.map(d=>
                   
                        <CardDias dia={d}></CardDias>
                   
                    )}
                
                    </div>
                
               

              
                </div>
               
            </Grid>

         
            {/* <Prueba ciudad={ciudad}></Prueba> */}
        </div>

    )
}

export default Main;