import React, { useState } from 'react'
import styles from './FindZone.module.css'

function FindZone() {

  const [openZone, setOpenZone] = useState(false);

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
          <input placeholder='Type a location'/>
          <button className={styles.submit}>Submit</button>
          <button className={styles.cancel} onClick={toggleOpenZone}>Cancel</button>
        </div>
        :
        <button className={styles.addZone} onClick={toggleOpenZone}>Add a Zone</button>
        }
      </div>
    </div>
  )
}

export default FindZone