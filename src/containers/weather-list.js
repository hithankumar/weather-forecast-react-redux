import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart_component';
import GoogleMap from '../components/google_maps';

class WeatherList extends Component{
    renderWeatherList(cityData){
        const cityName = cityData.city.name
        const temp = cityData.list.map(item => item.main.temp);
        const pressure = cityData.list.map(item => item.main.pressure);
        const humidity = cityData.list.map(item => item.main.humidity);
        const {lon, lat} = cityData.city.coord;
        return (
            <tr key={cityData.city.id}>
                <td><GoogleMap lon={lon} lat={lat} /></td>
                <td>
                    <Chart data={temp} color={'orange'} units={'K'}/>
                </td>      
                <td>
                    <Chart data={pressure} color={'blue'} units={'hPa'}/>
                </td>   
                <td>
                    <Chart data={humidity} color={'green'} units={'%'}/>
                </td>          
            </tr>

        )
    }

    render(){
        return (
          <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(this.renderWeatherList)}
            </tbody>
          </table>
        );
    }
}


function mapStateToProps({weather}){
    return {weather}
}
export default connect(mapStateToProps)(WeatherList)