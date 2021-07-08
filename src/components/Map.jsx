import React, { Component } from 'react'

import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
 
export class MapContainer extends Component {
    state = {
        selectedPlace: { name: 'name' }
    }
    onMarkerClick() {
        alert('Click')
    }
    onInfoWindowClose() {
        alert('Close')
    }
    
    render() {
      return (
      <div style={{width: window.innerWidth - 300, height: window.innerHeight - 300, overflow: 'hidden'}}>
        {/* <Map style={{ width: 200, height: 300, backgroundColor: 'green', }} google={this.props.google} zoom={14}>
  
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map> */}
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw')
})(MapContainer)
