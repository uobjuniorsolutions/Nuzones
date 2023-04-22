import React, { useState, useCallback, useEffect } from 'react'
import { GoogleMap, useJsApiLoader, Marker, InfoWindowF } from '@react-google-maps/api';

// Styles import
import styles from './Maps.module.css'
import { Rating } from '@mui/material';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '10px'
};

const center = {
    lat: 52.464,
    lng: -1.389
}

const tempZones = [
  {
    id: 193,
    latitude: 52.7514,
    longitude: -1.973,
    title: "Cannock Chase",
    groupLink: "https://www.facebook.com/groups/1669929603286380",
    imageUrl: "https://awscdn.com/image_1",
    description: "Just north of Brum lies Cannock Chase. Mixture of trail centre routes, Dh tracks, & off piste goodness.",
    rating: 3,
    exactName: "Cannock Chase MTB Riders"
  },
  {
    id: 194,
    latitude: 51.8397,
    longitude: -2.1147,
    title: "Project 417",
    groupLink: "https://www.facebook.com/groups/721261079585555",
    imageUrl: "https://awscdn.com/image_1",
    description: "Dirt jumps, pump track, Dh tracks, 417 has it all. Perfect place to hone your bike skills on a summer eve sesh.",
    rating: 3,
    exactName: "NuZones - Project 417 Riders"
  },
  {
    id: 195,
    latitude: 51.8089,
    longitude: -2.5697,
    title: "Forest of Dean",
    groupLink: "https://www.facebook.com/groups/587317431370570",
    imageUrl: "https://awscdn.com/image_1",
    description: "Great mixture of Dh, enduro, & XC tracks. FOD has a tremendous amount of off piste, find yourself a local and get exploring.",
    rating: 4,
    exactName: "Forest of Dean \"FOD\" Mountain Biking"
  },
  {
    id: 196,
    latitude: 51.8095,
    longitude: -2.667,
    title: "Staunton",
    groupLink: "https://www.facebook.com/groups/877051753602558",
    imageUrl: "https://awscdn.com/image_1",
    description: "Home to Dirt magazine, large rocks, & beautiful views. Staunton is the definition of hidden gold.",
    rating: 3,
    exactName: "NuZones - Staunton Riders"
  },
  {
    id: 197,
    latitude: 52.3869,
    longitude: -2.9479,
    title: "Hopton ",
    groupLink: "https://www.facebook.com/groups/695396938952063",
    imageUrl: "https://awscdn.com/image_1",
    description: "Hopton's great trail centre loops & Dh tracks are an excellent preview of what to expect from Shropshire trails.",
    rating: 3,
    exactName: "NuZones - Hopton Riders"
  },
  {
    id: 198,
    latitude: 52.36,
    longitude: -2.9627,
    title: "Bucknell",
    groupLink: "https://www.facebook.com/groups/904953367440915",
    imageUrl: "https://awscdn.com/image_1",
    description: "Wow, what a place. A single great Dh track, but off piste everywhere you can see. If you are nearby, it's definitely worth checking out. ",
    rating: 4,
    exactName: "NuZones - Bucknell Riders"
  }
]

function Maps() {

  const [map, setMap] = useState(null);
  const [zones, setZones] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  const getZones = async () => {
    // let response = await fetch('https://nuzones.herokuapp.com/api/v1/zones')
    let response = await fetch('/api/v1/zones?page=0&size=1000')
    let data = await response.json()
    setZones(data.content)
  }

  useEffect(() => {
    getZones();
    // setZones(tempZones);
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
                        <Rating name="rating" value={zone.rating} readOnly />
                      </div>
                      <p className={styles.description}>{zone.description}</p>
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