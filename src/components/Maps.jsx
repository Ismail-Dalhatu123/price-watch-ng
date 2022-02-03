import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { toast } from "react-toastify";
import AdminContext from "../contexts/AdminContext";
import getDarkClass from "../utils/getDarkClass";
import Map from "./Map";
import Loader from "./Loader";

function Maps(props) {
  const { registeredMarkets } = useContext(AdminContext);
  const [marketMarkers, setMarketMarkers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedMarker, setSelectedMarker] = useState({});

  const loadMarkers = () => {
    const list = [];
    for (let i = 0; i < registeredMarkets.length; i++) {
      const mkt = registeredMarkets[i];
      list.push({ ...mkt.LocationLatLng, id: mkt._id });
      console.log(mkt.Location);
    }
    console.log(list);
    setMarketMarkers(list);
    setIsLoading(false);
  };
  useEffect(() => {
    loadMarkers();
  }, [registeredMarkets]);
  return (
    <div
      className={`maps sh flex flex-column justify-center align-center ${getDarkClass(
        "dark-accent"
      )}`}
    >
      <div className="desc sh" style={{ padding: 20 }}>
        <h2>{selectedMarker?.Name}</h2>
        <p>{selectedMarker?.Location}</p>
      </div>
      <div className="map_">
        {isLoading ? (
          <Loader loading />
        ) : (
          <Map
            onClick={(m) => {
              const mk = registeredMarkets.find((mm) => mm._id === m.id);
              setSelectedMarker(mk);
            }}
            markars={marketMarkers}
          />
        )}
      </div>
    </div>
  );
}

export default Maps;
