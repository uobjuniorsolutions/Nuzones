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

const tempZones = {
    "content": [
      {
        "id": 1,
        "latitude": 14.0012,
        "longitude": 32.0844,
        "title": "Birmingham Nuzone",
        "groupLink": "https://fb.com/groups",
        "imageUrl": "https://awscdn.com/image_1",
        "description": "You are welcome to cycle in the west midlands",
        "rating": 0
      },
      {
        "id": 2,
        "latitude": 15.0012,
        "longitude": 31.0844,
        "title": "London Nuzone",
        "groupLink": "https://fb.com/groups",
        "imageUrl": "https://awscdn.com/image_2",
        "description": "You are welcome to cycle in the London",
        "rating": 3
      },
      {
        "id": 3,
        "latitude": 10.0011,
        "longitude": 23.0844,
        "title": "Glasgow Nuzone",
        "groupLink": "https://fb.com/groups",
        "imageUrl": "https://awscdn.com/image_3",
        "description": "You are welcome to cycle in the Glasgow",
        "rating": 1
      },
      {
        "id": 4,
        "latitude": 18.0012,
        "longitude": 34.0844,
        "title": "Dublin Nuzone",
        "groupLink": "https://fb.com/groups",
        "imageUrl": "https://awscdn.com/image_4",
        "description": "You are welcome to cycle in Dublin",
        "rating": 2
      },
      {
        "id": 5,
        "latitude": 20,
        "longitude": 31.0844,
        "title": "Manchester Nuzone",
        "groupLink": "https://fb.com/groups",
        "imageUrl": "https://awscdn.com/image_5",
        "description": "You are welcome to cycle in Manchester",
        "rating": 4
      },
      {
        "id": 6,
        "latitude": 12.0003,
        "longitude": 34.01,
        "title": "Birmingham zone 2",
        "groupLink": "https://fb.groups.com/brum",
        "imageUrl": "https://cdn.images.com/ddfd-894379-csdfi4",
        "description": "mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi",
        "rating": 4
      }
    ]
  }

// For testing purposes
const getTempZones = async () => {
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