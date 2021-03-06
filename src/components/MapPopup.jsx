import React from "react";
import GoogleMap from "./GoogleMap";
const MapPopup = ({ coords, closeMap = () => {} }) => {
  if (!coords) return null;
  return (
    <div className="map_pup_up">
      <button className="close_btn" onClick={closeMap}>
        Close
      </button>
      <div className="map_container">
        <GoogleMap
          hideText={false}
          markers={[{ lat: coords.latitude, lng: coords.longitude }]}
          width={window.innerWidth * 0.8}
          height={window.innerHeight * 0.9}
        />
      </div>
    </div>
  );
};

export default MapPopup;
