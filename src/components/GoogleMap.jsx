import { GoogleApiWrapper, Marker, Map } from "google-maps-react";
import React, { useContext } from "react";
import AppContext from "../contexts/AppContext";
import { defaultMap, mapStyles } from "../utils/mapstyles";

function GoogleMap({ google, width, height, markers = [], hideText = true }) {
  const { theme } = useContext(AppContext);
  console.log(markers);
  return (
    <Map
      google={google}
      style={{
        width,
        height,
      }}
      initialCenter={{
        lat: markers[0].lat,
        lng: markers[0].lng,
      }}
      zoom={14}
      styles={
        theme === "light"
          ? hideText
            ? defaultMap
            : [defaultMap[1]]
          : [...mapStyles, ...(hideText ? defaultMap : [defaultMap[1]])]
      }
    >
      {markers.map((mak, idx) => (
        <Marker key={idx} position={mak} />
      ))}
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDhV68bTduvMWSKWJAQ9i8W3UfxLErYDGw",
})(GoogleMap);
