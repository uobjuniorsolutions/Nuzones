import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindowF } from '@react-google-maps/api';

// Styles import
import styles from './Maps.module.css'

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
};

const center = {
    lat: 52.464,
    lng: -1.389
}

function Maps() {

  const [map, setMap] = useState(null);
  const [zones, setZones] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const getZones = async () => {
    // let response = await fetch('http://localhost:8080/api/v1/zones')
    let response = await fetch('https://nuzones.herokuapp.com/api/v1/zones')
    let data = await response.json()
    setZones(data.content)
  }

  useEffect(() => {
    getZones();
  }, []);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyA-yVU-YlGNYcwzmXzzwTHv6v12m6ReVP4"
  })

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    } else if (marker === null) {
      setActiveMarker(null);
    } else {
      setActiveMarker(marker);
    }
  };

  // Not being used for now because markers are too far from center. Will change in the future
  // Might look into this to fix the problem with the click outside redirecting to center!
  const onLoad = (map) => {
    const bounds = new google.maps.LatLngBounds(center);
    zones.forEach(({ latitude, longitude }) => bounds.extend({lat: latitude, lng: longitude}));
    map.fitBounds(bounds);

    setMap(map);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
}, [])

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        // center={center}
        center={{lat: 20, lng: 31.0844}} //For the current zone!
        zoom={7}
        onClick={() => handleActiveMarker(null)}
        // onLoad={onLoad}
        onLoad={map => setMap(map)}
        onUnmount={onUnmount}
    >

        { zones.map(zone => (

            <Marker 
                key={zone.id}
                position={{
                    lat: zone.latitude, 
                    lng: zone.longitude
                }}  
                onClick={() => {
                  handleActiveMarker(zone.id);
                }}  
            >

              {activeMarker === zone.id ? (
                <InfoWindowF onCloseClick={() => handleActiveMarker(null)} onLoad={() => map.panTo({lat: zone.latitude, lng: zone.longitude})}
                  options={{overflow: 'hidden'}}
                >
                  <div className={styles.infoContainer}>
                    <div className={styles.leftContainer}>
                      <div>
                        <h1>{zone.title}</h1>
                        <h2 className={styles.coordinates} style={{fontFamily: 'monospace'}}>{zone.latitude}, {zone.longitude}</h2>
                      </div>
                      <p className={styles.description}>Description: {zone.description}</p>
                      <button>
                        <a href={zone.groupLink} target='_blank' style={{textDecoration: 'none', color: 'inherit'}}>Go to community</a>
                      </button>
                    </div>
                    <img className={styles.image} src='./Middle.jpg' />
                  </div>
                </InfoWindowF>
              ) : null}

            </Marker>
        )) }

    </GoogleMap>
  ) : <></>
}

export default Maps