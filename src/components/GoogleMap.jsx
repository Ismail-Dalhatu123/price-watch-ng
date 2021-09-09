import { GoogleApiWrapper, Marker, Map } from "google-maps-react";
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { defaultMap, mapStyles } from "../utils/mapstyles";

function GoogleMap({ google, width, height, markers = [] }) {
  const { theme } = useContext(AppContext);
  return (
    <Map
      google={google}
      style={{
        width,
        height,
      }}
      initialCenter={{
        lat: 10.2886879,
        lng: 11.1653817,
      }}
      zoom={14}
      styles={theme === "light" ? defaultMap : [...mapStyles, ...defaultMap]}
    >
      {markers.map((mak) => (
        <Marker key={mak._id} position={mak} />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw",
})(GoogleMap);
