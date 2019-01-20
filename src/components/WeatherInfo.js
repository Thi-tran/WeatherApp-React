import React from 'react';
import {useState, useEffect} from 'react';
import ReactSVG from 'react-svg';

import windIcon from '../../public/image/wind.png';
import precipitationIcon from '../../public/image/precipitation.png';
import pressureIcon from '../../public/image/pressure.png';
import humidityIcon from '../../public/image/humidity.png';
function WeatherInfo (props) {
    const [weather,setWeather] = useState(undefined);
    const [icon,setIcon] = useState(undefined);
    const [temp,setTemp] = useState(undefined);

    const [wind,setWind] = useState(undefined);
    const [precipitation,setPrecipitation] = useState(undefined);
    const [humidity,setHumidity] = useState(undefined);
    const [pressure,setPressure] = useState(undefined);

    if (props.city) {
        useEffect(() => {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&APPID=af081727ae6d5c4cbe2cd266b726e632`).then(results => {return results.json();}
            ).then(data => {
                setWind(data.wind.speed)
                setPressure(data.main.pressure)
                setHumidity(data.main.humidity)
                setWeather(data.weather[0].description)
                setIcon(`../../public/image/weatherIcon/${data.weather[0].main}.svg`);
                setTemp(Math.round(data.main.temp))
            });
        }, [props.city])
        useEffect(() => {
            fetch(`https://api.worldweatheronline.com/premium/v1/weather.ashx?key=a5bf94fc16c84928acb114156182311&q=${props.city}&num_of_days=1&tp=24&format=json`).then(results => {return results.json();}
            ).then(data => setPrecipitation(data.data.weather[0].hourly[0].chanceofrain))
        }, [props.city])
    }
    setTimeout(function(){
        console.log(icon)
        //logic
    },1000);    
    return (
        <div>
            {props.city &&  
                <div className> 
                    <h1 className="center white"><strong>{props.city}</strong></h1>
                    <h1 className="center white">{temp} °C</h1>
                    <h3 className="center white">{weather}</h3>
                    <br></br>
                    <div className="col span-1-of-4 white">
                        <img src={windIcon} className="weatherIcon center"/>
                        <br></br>
                        <h2 className="center">Wind</h2>
                        <br></br>
                        <h3 className="center">{wind}</h3>
                    </div>
                    <div className="col span-1-of-4 white">
                        <img src={precipitationIcon} className="weatherIcon center"/>
                        <br></br>
                        <h2 className="center">Precipitation</h2>
                        <br></br>
                        <h3 className="center">{precipitation}</h3>
                    </div>
                    <div className="col span-1-of-4 white">
                        <img src={humidityIcon} className="weatherIcon center"/>
                        <br></br>
                        <h2 className="center">Humidity</h2>
                        <br></br>
                        <h3 className="center">{humidity}</h3>
                    </div>
                    <div className="col span-1-of-4 white">
                        <img src={pressureIcon} className="weatherIcon center"/>
                        <br></br>
                        <h2 className="center">Pressure</h2>
                        <br></br>
                        <h3 className="center">{pressure}</h3>
                    </div>
                </div>
            }
        </div>
    )
}

export default WeatherInfo;
