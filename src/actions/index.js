import axios from 'axios';

const API_KEY = "b6907d289e10d714a6e88b30761fae22";
const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityID){
    const url = `${ROOT_URL}&id=${cityID}s`;
    const request = axios.get(url); //returns a promise
    console.log("url is", url);
    return{
        type: FETCH_WEATHER,
        payload: request
    };
}
