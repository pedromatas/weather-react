import react from "react"
import { useState, useEffect } from "react";
import ButtonWeather from "../components/buttonweather.jsx";
import Prueba from "../components/pruebas.jsx";
import API from "../apiKey.js"

function Main() {
    let [prueba2, setprueba2] = useState('');
    let [ciudad, setciudad] = useState('madrid');
    let[lat,setLat]=useState('');
    let[long,setLong]=useState('');

    // geolocalizacion
    let options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: Infinity
      };
    function error(err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
      };
      
   
     navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position.coords.latitude, position.coords.longitude);
            setLat(position.coords.latitude);
            setLong(position.coords.longitude); 
        },error,options);

    
    useEffect(() => {


        async function fetchData() {
          
       
            let prueba = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API}`)
            let r = await prueba.json();

            console.log(r)
            

            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API}`)
            let hour = await hourly.json();
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            console.log(hour)
         

        }
        fetchData();

    }, [ciudad,lat,long]);



    const buscador = (e) => {
        e.preventDefault();
        console.log(e.target.textCiudad.value)
        setciudad(e.target.textCiudad.value)


    }

    return (
        <div>
            <form onSubmit={buscador} action="">
                <input type="text" name="textCiudad" />
                <button type="submit">Buscador</button>
            </form>
            <p>{ciudad}</p>
            <img src="" alt="" />
            <ButtonWeather></ButtonWeather>
            {/* <Prueba ciudad={ciudad}></Prueba> */}
        </div>

    )
}

export default Main;