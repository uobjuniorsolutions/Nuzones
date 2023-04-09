import React, { useState } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import { Rating } from '@mui/material';

function FindZone() {

  const [openZone, setOpenZone] = useState(false);

  const [rating, setRating] = useState(0)

  function toggleOpenZone() {
    setOpenZone(!openZone);
  }

  return (
    <div className='content'>
      <h1 className='title'>Find a Zone</h1>
      <input className={styles.search} placeholder="Search"/>
      <div className={styles.map}>Place the map here</div>
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