import React from 'react'
import styles from './FindZone.module.css'

function FindZone() {
  return (
    <div className='content'>
      <h1 className='title'>Find a Crew</h1>
      <input className={styles.search} placeholder="Search"/>
      <div className={styles.map}>Place the map here</div>
      <div className={styles.missZone}>
        <h2>Have we missed a zone?</h2>
        <p>Let us know where to add one!</p>
        <button className={styles.addZone}>Add a Zone</button>
      </div>
    </div>
  )
}

export default FindZone