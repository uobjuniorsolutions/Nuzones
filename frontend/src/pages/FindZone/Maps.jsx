import React, { useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
};

const center = {
    lat: 52.464,
    lng: -1.389
}

// For testing purposes
const tempZones = async () => {
    let response = await fetch('localhost:8080/api/v1/zones')
    let data = await response.json()
    console.log('DATA:', data)
    setZones(data)
}

function Maps() {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyA-yVU-YlGNYcwzmXzzwTHv6v12m6ReVP4"
    })

    const [map, setMap] = useState(null);

    // const onLoad = useCallback(function callback(map) {
    //     // const bounds = new window.google.maps.LatLngBounds(center);
    //     // map.fitBounds(bounds);



    //     setMap(map);
    // }, [])

    // const onUnmount = useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded ? (

        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={7}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
        >

            { (tempZones.content).map(zone => (
                <Marker 
                    key={zone.id}
                    position={{
                        lat: zone.latitude, 
                        lng: zone.longitude
                    }}
                    
                />
            )) }

        </GoogleMap>

    ) : <></>
}

export default Maps