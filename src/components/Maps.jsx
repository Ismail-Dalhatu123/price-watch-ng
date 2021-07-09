import React from 'react';
import getDarkClass from '../utils/getDarkClass';
import Map from './Map';

function Maps(props) {
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