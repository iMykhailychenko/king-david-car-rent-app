import { Map, Marker } from 'google-maps-react';
import React from 'react';

const mapStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const MapContainer = ({ zoom, google, uluru }) => (
    <Map zoom={zoom} google={google} style={mapStyles} center={uluru}>
        <Marker position={uluru} />
    </Map>
);

export default MapContainer;
