import React, { Component } from 'react'
import AppContext from '../contexts/AppContext';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import mapStyles from '../utils/mapstyles';
import { useContext } from 'react';

function AppMap({ google }) {
  const { theme } = useContext(AppContext)
  return (
    <div style={{width: window.innerWidth - 300, height: window.innerHeight - 320, overflow: 'hidden', position: 'relative',marginLeft: 'auto', marginRight: 'auto'}}>
      <Map
                
        styles={theme === 'light' ? [] : mapStyles} style={{ width: window.innerWidth - 300, height: window.innerHeight - 320, borderRadius: 10, }} google={google} zoom={14}>
        
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

// export class MapContainer extends Component {
//     state = {
//         selectedPlace: { name: 'name' }
//     }
//     onMarkerClick() {
//         alert('Click')
//     }
//     onInfoWindowClose() {
//         alert('Close')
//     }
    
//     render() {
//       return (
//         <AppContext.Consumer>
//           {context => (
//             <div style={{width: window.innerWidth - 300, height: window.innerHeight - 320, overflow: 'hidden', position: 'relative',marginLeft: 'auto', marginRight: 'auto'}}>
//               <Map
                
//                 styles={context.theme === 'light' ? [] : mapStyles} style={{ width: window.innerWidth - 300, height: window.innerHeight - 320, borderRadius: 10, }} google={this.props.google} zoom={14}>
        
//                 {/* <Marker onClick={this.onMarkerClick}
//                         name={'Current location'} />
        
//                 <InfoWindow onClose={this.onInfoWindowClose}>
//                     <div>
//                       <h1>{this.state.selectedPlace.name}</h1>
//                     </div>
//                 </InfoWindow> */}
//               </Map>
//             </div>
//           )}
//         </AppContext.Consumer>
//     );
//   }
// }
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw')
})(AppMap)