import React from "react";
import { GoogleApiWrapper, Map } from "google-maps-react";
const MapPopup = ({ coords, closeMap = () => {} }) => {
  if (!coords) return null;
  return (
    <div className="map_pup_up">
      <div className="map_container">
        <button className="close_btn" onClick={closeMap}>
          Close
        </button>
        {/* <Map
          style={{
            width: window.innerWidth * 0.8,
            height: window.innerHeight * 0.9,
          }}
          initialCenter={{
            lat: 10.2886879,
            lng: 11.1653817,
          }}
        /> */}
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw",
})(MapPopup);
