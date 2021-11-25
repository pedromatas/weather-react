import react from "react"
import { useState, useEffect, useContext } from "react";
import ButtonWeather from "../components/buttonweather.jsx";
import Prueba from "../components/pruebas.jsx";
import API from "../apiKey.js"
import { TempContext } from "../context/tempContext.js";

function Main() {
    const [temp, settemp] =  useContext(TempContext);
    let [ciudad, setciudad] = useState('madrid');
    let[lat,setLat]=useState('');
    let[long,setLong]=useState('');

    // geolocalizacion
    let options = {
        enableHighAccuracy: true,
        
        maximumAge:Infinity
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
            

            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${temp}&appid=${API}`)
            let hour = await hourly.json();
            // setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            console.log(hour)
         

        }
        fetchData();

    }, [ciudad,lat,long,temp]);



    const buscador = (e) => {
        e.preventDefault();
        console.log(e.target.textCiudad.value)
        setciudad(e.target.textCiudad.value)


    }

    
    const handleClick=e=>{
        temp==='metric'? settemp('imperial'):settemp('metric')
        console.log(temp)
    }

    return (
        <div>
            <form onSubmit={buscador} action="">
                <input type="text" name="textCiudad" />
                <button type="submit">Buscador</button>
            </form>
            <p>{ciudad}</p>
            <img src="" alt="" />
            <button onClick={handleClick}>holaa</button>
            <ButtonWeather onClick={handleClick}></ButtonWeather>
            {/* <Prueba ciudad={ciudad}></Prueba> */}
        </div>

    )
}

export default Main;