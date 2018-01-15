import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import {CITY_LIST} from '../constants/city_list';

class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {
            term: ''
        }
    }
    onInputChange(evt){
        this.setState({
            term: evt.target.value
        })
    }
    getCityID(cityName){
        const DEFAULT_CITY_ID = 707860;
        const matchedCity = CITY_LIST.filter(item => cityName.toLowerCase() === item.name.toLowerCase())[0];
        return matchedCity ? matchedCity.id : DEFAULT_CITY_ID;
    }
    onFormSubmit(event){
        event.preventDefault();
        //to get weather data
        this.props.fetchWeather(this.getCityID(this.state.term));
        //clear the form after submit action.
        this.setState({term:''});
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit.bind(this)} className="input-group">
                <input 
                    placeholder="Get weather information for city"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)}
                />
                <span className="input-group-btn"> 
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch);
}
// function mapStateToProps(state){

// }
export default connect(null, mapDispatchToProps)(SearchBar)