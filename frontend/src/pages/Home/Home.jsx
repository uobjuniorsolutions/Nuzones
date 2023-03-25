import React from 'react'
import styles from './Home.module.css'

function Home() {

  // Could add a scroll down thingy below share your adventures?
  // Add hover effects?

  return (
    <div className={styles.content}>

      <div className={styles.adventures}>
        <p className={styles.heroTitle}>SHARE YOUR ADVENTURES</p>
        <div className={styles.bottomContainer}>
          <div className={styles.description}>
            <p>For those who are ready to explore nature to its fullest, </p> 
            <p>NuZones allows you to find the best spots and to create meaningful memories as a group.</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className='find_crew'>Find a Crew</button>
            <button className='brand_ambassador'>Become a Brand Ambassador</button>
          </div>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.video}> Video </div>
        <div className={styles.videoText}>
          <p>Intro text for the promo video</p>
          <button className='find_crew'>Find a Crew</button>
        </div>
      </div>

      <div className={styles.sponsors}>
        <h1>Our Sponsors</h1>
        <h2>These brands keep the NuZones spirit alive etc</h2>
        <div className={styles.sponsorsPics}>
          <div className={styles.sponsorsElement}>
            <img src="Brand1.png"/>
            <p>Rider/Brand Option 1</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='Brand2.png' />
            <p>Rider/Brand Option 2</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='Brand3.png' />
            <p>Rider/Brand Option 3</p>
          </div>
        </div>
      </div>

      <div className={styles.help}>
        <h1>How can NuZones help you?</h1>
        <div className={styles.helpContainer}>
          <div className={styles.helpTextBox}>Text box</div>
          <div className={styles.helpImageContainer}>
            {/* Put the images here */}
            Images
          </div>
        </div>
      </div>

      <div className={styles.sponsors}>
        <h1>Our Values</h1>
        <h2>Our values are...</h2>
        <div className={styles.sponsorsPics}>
          <div className={styles.sponsorsElement}>
            <img src="Brand1.png"/>
            <p className={styles.valuesName}>Community</p>
            <div className={styles.valuesTextBox}>Text box</div>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='Brand2.png' />
            <p className={styles.valuesName}>Sustainability</p>
            <div className={styles.valuesTextBox}>Text box</div>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='Brand3.png' />
            <p className={styles.valuesName}>Adventurous</p>
            <div className={styles.valuesTextBox}>Text box</div>
          </div>
        </div>
      </div>

      <div className={styles.instagram}>
        <h1>Find us on Instagram</h1>
        <div className={styles.instagramContainer}>Feed of posts in this container</div>
      </div>

    </div>
  )
}

export default Home