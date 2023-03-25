import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className='content'>
      <p className='title'>What's in the NuZones family</p>
      <div className='description'>
        <p>Text that explains what's going to come in the NuZones family.</p>
        <p>Tell people that they can expect those to roll out in the following months.</p>
      </div>

      <div className={styles.blocks}>
        <div className={styles.section} style={{backgroundColor: '#045680'}}>
          <div className={styles.img}>NuPics img</div>
          <div className={styles.text}>NuPics text</div>
        </div>

        <div className={styles.section}>
          <div className={styles.text}>NuTags text</div>
          <div className={styles.img}>NuTags img</div>
        </div>

        <div className={styles.section} style={{backgroundColor: '#045680'}}>
          <div className={styles.img}>NuTunes img</div>
          <div className={styles.text}>NuTunes text</div>
        </div>

        <div className={styles.section}>
          <div className={styles.text}>NuDays text</div>
          <div className={styles.img}>NuDays img</div>
        </div>
      </div>
    </div>
  )
}

export default About