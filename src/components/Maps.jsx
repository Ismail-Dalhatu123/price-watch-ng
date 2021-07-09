import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { toast } from 'react-toastify';
import AdminContext from '../contexts/AdminContext';
import getDarkClass from '../utils/getDarkClass';
import Map from './Map';
import Loader from './Loader';

function Maps(props) {
    const { registeredMarkets } = useContext(AdminContext)
    const [marketMarkers, setMarketMarkers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const loadMarkers = () => {
        const list = []
        for (let i = 0; i < registeredMarkets.length; i++) {
            const mkt = registeredMarkets[i];
            list.push(mkt.LocationLatLng)
            console.log(mkt)
        
        }
        console.log(list)
        setMarketMarkers(list)
        setIsLoading(false)
    }
    useEffect(() => {
        loadMarkers()
    },[])
    return (
        <div className={`maps sh flex flex-column justify-center align-center ${getDarkClass('dark-accent')}`}>
            <div className="desc sh"></div>
            <div className="map_">
                {isLoading ? <Loader loading /> : <Map markars = {marketMarkers} />}
            </div>
        </div>
    );
}

export default Maps;