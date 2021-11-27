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

            let prueba = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.textCiudad.value}&appid=${API}`)
            let r = await prueba.json();
            setfetch(r)
            console.log(r)

            setLat(r.coord.lat);
            console.log(r.coord.lat)
            setLong(r.coord.lon);
            console.log(r.coord.lon)



            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r.coord.lat}&lon=${r.coord.lon}&units=${temp}&appid=${API}`)
            let hour = await hourly.json();
            setfetchHora(hour);
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            console.log(hour, 'zimbaue')
        }
        fetchData()

    }

    let metrica = '';
    const handleClick = e => {
        temp === 'metric' ? metrica = 'imperial' : metrica = 'metric';
        temp === 'metric' ? settemp('imperial') : settemp('metric');
        console.log(temp)
        async function fetchData() {




            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${metrica}&appid=${API}`)
            let hour = await hourly.json();
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            setfetchHora(hour)
            console.log(hour)
        }
        fetchData()
    }

    return (
        <div>
             <Box sx={{ margin: '0 auto 16px' }}>
            <Grid container spacing={2} direction="column">
                <Grid item container spacing={2}>

                    <Grid item xs={1.2}>
                        <ToggleButtonWeather click={handleClick}></ToggleButtonWeather>
                    </Grid>
                    <Grid item xs={6}>
                        <p>{ciudad}</p>

                    </Grid>
                    <Grid item xs={4}>
                        <form onSubmit={buscador} action="">
                            <input type="text" name="textCiudad" className="buscador" placeholder="Buscar..." />
                            {/* <button type="submit">Buscador</button> */}
                        </form>
                    </Grid>

                </Grid>
                <Grid item container spacing={2}>

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
                <div className="contenedor-semana">
                    
                    <Grid item container spacing={2} xs={12} sx={{ overflowX:"auto"}}>
                {fetchHora.daily?.map(d=>
                     <Grid item xs={2}>
                        <ChipDias dia={d}></ChipDias>
                    </Grid>
                    )}
                

                </Grid>
                <Grid item xs={12} container spacing={2} sx={{ overflowX:"auto"}}>
                {fetchHora.daily?.map(d=>
                     <Grid item xs={2}>
                        <CardDias dia={d}></CardDias>
                    </Grid>
                    )}
                

                </Grid> 
                </div>
               
            </Grid>

            </Box>
            {/* <Prueba ciudad={ciudad}></Prueba> */}
        </div>

    )
}

export default Main;