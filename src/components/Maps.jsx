import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { toast } from 'react-toastify';
import AdminContext from '../contexts/AdminContext';
import getDarkClass from '../utils/getDarkClass';
import Map from './Map';

function Maps(props) {
    const { registeredMarkets } = useContext(AdminContext)
    const [marketMarkers, setMarketMarkers] = useState([])

    const loadMarkers = () => {
        const list = []
        for (let i = 0; i < registeredMarkets.length; i++) {
            const mkt = registeredMarkets[i];
            // const res = await geocodeByAddress(mkt.Location)
            // const ltn = await getLatLng(res[0])
            // console.log(ltn)
            // geocodeByAddress(mkt.Location)
            //     .then(result => getLatLng(result[0]))
            //     .then(latlng => list.push(latlng))
            //     .catch(err => console.log('An error occured', err))
        
        }
        setMarketMarkers(list)
        console.log(list)
        console.log(registeredMarkets)
    }
    useEffect(() => {
        loadMarkers()
    },[])
    return (
        <div className={`maps sh flex flex-column justify-center align-center ${getDarkClass('dark-accent')}`}>
            <div className="desc sh"></div>
            <div className="map_">
                <Map />
            </div>
        </div>
    );
}

export default Maps;