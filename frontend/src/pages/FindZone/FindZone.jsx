import React, { useState } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import { Rating } from '@mui/material';

// Google Maps import
import Maps from './Maps';

function FindZone() {

  // This is just for testing
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

  const [openZone, setOpenZone] = useState(false);
  const [rating, setRating] = useState(0);
  const [zones, setZones] = useState([]);

  function toggleOpenZone() {
    setOpenZone(!openZone);
  }

  // Doesn't work yet (waiting for Emmanuel)
  // And I don't think I would need it here, it would be in Maps.jsx
  const getZones = async () => {
    let response = await fetch('localhost:8080/api/v1/zones')
    let data = await response.json()
    console.log('DATA:', data)
    setZones(data)
  }

  return (
    <div className='content'>
      <h1 className='title'>Find a Zone</h1>
      <input className={styles.search} placeholder="Search"/>
      <div className={styles.map}>
        <Maps />
        {/* <button onClick={Test}>getZones</button> */}
      </div>
      <div className={styles.missZone}>
        <h2>Have we missed a zone?</h2>
        <p>Let us know where to add one!</p>

        {openZone ?
        <div className={styles.openZone}>
          <div className={styles.inputs}>
            <input placeholder='Type a location'/>
            <textarea rows={4} placeholder='Description of this location'/>
            <div className={styles.rating}>
              <p>Rating: </p> 
              <Rating name="rating" value={rating}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }} 
              />
            </div>
            
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.cancel} onClick={toggleOpenZone}>Cancel</button>
            <button className={styles.submit}>Submit</button>
          </div>
        </div>
        :
        <button className={styles.addZone} onClick={toggleOpenZone}>Add a Zone</button>
        }

      </div>
    </div>
  )
}

export default FindZone