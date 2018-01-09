import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

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
        console.log(this.state.term);
    }
    onFormSubmit(event){
        event.preventDefault();
    }
    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
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

export default SearchBar