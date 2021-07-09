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
      <div style={{width: window.innerWidth - 300, height: window.innerHeight - 320, overflow: 'hidden', position: 'relative',marginLeft: 'auto', marginRight: 'auto'}}>
        <Map style={{ width: window.innerWidth - 300, height: window.innerHeight - 320,borderRadius: 10, }} google={this.props.google} zoom={14}>
  
          {/* <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
  
          <InfoWindow onClose={this.onInfoWindowClose}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow> */}
        </Map>
      </div>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw')
})(MapContainer)
