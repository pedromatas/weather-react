import react from "react"
import { useState, useEffect, useContext } from "react";
import API from "../apiKey.js"
import { TempContext } from "../context/tempContext.js";
import ToggleButtonWeather from "../components/toggleButtonWeather.jsx";
import './index.css';
import { Grid } from "@mui/material";
import CardGrados from "../components/card-grados-pr/card-grados.jsx";


function Main() {
    const [temp, settemp] = useContext(TempContext);
    let [ciudad, setciudad] = useState('madrid');
    let [lat, setLat] = useState('');
    let [long, setLong] = useState('');




    useEffect(() => {

        // geolocalizacion


        navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);

            setLat(position.coords.latitude);

            setLong(position.coords.longitude);
            async function fetchData() {

                let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=${temp}&appid=${API}`)
                let hour = await hourly.json();
                // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
                console.log(hour, 'asjdajf')


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

            console.log(r)

            setLat(r.coord.lat);
            console.log(r.coord.lat)
            setLong(r.coord.lon);
            console.log(r.coord.lon)



            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${r.coord.lat}&lon=${r.coord.lon}&units=${temp}&appid=${API}`)
            let hour = await hourly.json();
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
            console.log(hour)
        }
        fetchData()
    }

    return (
        <div>
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
                       <CardGrados></CardGrados>
                    </Grid>
                    <Grid item xs={3}>
                       

                    </Grid>
                    <Grid item xs={3}>
                        
                    </Grid>

                </Grid>
            </Grid>


            {/* <Prueba ciudad={ciudad}></Prueba> */}
        </div>

    )
}

export default Main;