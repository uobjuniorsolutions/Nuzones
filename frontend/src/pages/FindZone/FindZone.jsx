import React, { useState } from 'react'
import styles from './FindZone.module.css'

// MUI Rating component import
import { Rating, Stack } from '@mui/material'; 
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

// Google Maps import
import Maps from './Maps';

function FindZone() {

  const [openZone, setOpenZone] = useState(false);
  const [rating, setRating] = useState(0);

  function toggleOpenZone() {
    setOpenZone(!openZone);
    setRating(0);
  }

  return (
    <div className='content'>
      <h1 className='title'>Find a Zone</h1>
      <input className={styles.search} placeholder="Search"/>
      <div className={styles.map}>
        <Maps />
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
                icon = {<StarIcon style={{width:"2rem",height:"2rem"}}></StarIcon>}
                emptyIcon = {<StarOutlineIcon style={{width:"2rem",height:"2rem"}}></StarOutlineIcon>}
                onChange={(event, newRating) => {
                  setRating(newRating);
                }} 
              />
            </div>
            
          </div>
          <div className={styles.buttonRow}>
            <button className={styles.cancel} onClick={toggleOpenZone}>Cancel</button>
            <button className={styles.submit}>Submit</button>
            {/* Be carefull to, when submitting, get the value of the rating before closing the menu, because closing resets the value */}
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