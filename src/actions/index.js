import axios from 'axios';

const API_KEY = "b8369af8f4d32e3c19a302f303f54b54";
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url); //returns a promise

    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
