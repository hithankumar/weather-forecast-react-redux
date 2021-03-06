import React, {Component} from 'react';

class GoogleMap extends Component{
    componentDidMount(){
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.lon
            }
        })
    }
    render(){
        //to get this.ref.map - to get reference to this html element
        return <div ref="map"></div>
    }
}

export default GoogleMap;