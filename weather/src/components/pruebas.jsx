import { useEffect,useState } from "react"
import API from "../apiKey.js"

function Prueba(props) {

let [prueba2,setprueba2]= useState('');

    useEffect(() => {

        let lat=0
        let long=0
        async function fetchData() {
            navigator.geolocation.getCurrentPosition(function(position) {
                console.log(position.coords.latitude, position.coords.longitude);
                lat=position.coords.latitude;
                long=position.coords.longitude
              });
             
            // You can await here
            let prueba = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.ciudad}&appid=${API}`)
            let r = await prueba.json();

            console.log(r)
         

            let hourly = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${API}`)
            let hour = await hourly.json();
           setprueba2(`http://openweathermap.org/img/wn/${hour.current.weather[0].icon}@2x.png`)
            console.log(hour)
            console.log()

        }
        fetchData();

    }, [props.ciudad]);



    return (
      <img src={prueba2} alt="" />
    
    )
}

export default Prueba;