import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, Marker, InfoWindowF } from '@react-google-maps/api';

// Styles import
import styles from './Maps.module.css'
import { Rating } from '@mui/material';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '0.7rem'
};

const center = {
    lat: 52.464,
    lng: -1.389
}

function Maps({ zones, searchedZone, isLoaded }) {

  const [map, setMap] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);

  useEffect(() => {
    if (searchedZone) {
      handleActiveMarker(searchedZone.id);
    }
  }, [searchedZone]);

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

  // Map styles to remove medical point, parks etc and make them non clickable as well
  var myStyles =[
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
              { visibility: "off" }
        ]
    }
  ];

  return isLoaded ? (
    <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={8}

        options={{
          streetViewControl: false,
          styles: myStyles
        }}

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
                      <div style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                        <h1>{zone.title}</h1>
                        <h2 className={styles.coordinates} style={{fontFamily: 'monospace'}}>{zone.latitude}, {zone.longitude}</h2>
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '0.25rem'}}>
                          <h2 className={styles.coordinates}>Difficulty: </h2>
                          <Rating name="rating" value={zone.rating} readOnly />
                        </div>
                      </div>
                      <p className={styles.description}>{zone.description}</p>
                      <button>
                        <a href={zone.groupLink} target='_blank' style={{textDecoration: 'none', color: 'inherit'}}>Go to community</a>
                      </button>
                    </div>
                    <div className={styles.imageContainer}>
                      <img className={styles.image} src={zone.imageUrl} />
                    </div>
                  </div>
                </InfoWindowF>
              ) : null}

            </Marker>
        )) }

    </GoogleMap>
  ) : <></>
}

export default Maps