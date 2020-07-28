import React from 'react';
import { Map, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
};

const MapContainer = ({ zoom, google, uluru }) => (
    <Map zoom={zoom} google={google} style={mapStyles} center={uluru}>
        <Marker position={uluru} />
    </Map>
);

export default MapContainer;
