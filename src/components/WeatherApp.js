import React from 'react';
import Header from './Header';
import WeatherSearch from './WeatherSearch';
import WeatherInfo from './WeatherInfo' 
import {useState} from 'react';

function WeatherApp (){

    const [city, setCity] = useState();
    const subtitle = 'Get the weather info of any city you want';
    
    return (
            <div>
                <Header subtitle={subtitle}/>
                
                <WeatherSearch 
                    handleWeatherSearch = {(suggest) => setCity(suggest)}                    
                />
                <WeatherInfo 
                    city={city}
                />
            </div>
    )
    
}

export default WeatherApp;