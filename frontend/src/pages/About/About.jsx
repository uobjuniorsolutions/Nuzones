import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className='content'>
      <h1 className='title'>What's in the NuZones family</h1>
      <div className='description'>
        <p>Text that explains what's going to come in the NuZones family.</p>
        <p>Tell people that they can expect those to roll out in the following months.</p>
      </div>

      {/* Fix the pb with img not same size when I'll have the img */}

      <div className={styles.blocks}>
        <div className={styles.section} style={{backgroundColor: '#045680'}}>
          <h1 className={styles.sectionTitleWhite}>NuPics</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.img}>NuPics img</div>
            <div className={styles.text}>
              Don't just tell us about your ride, let's see what you have been up to. 
              Tag us in your content and use the #nupics to be featured on our socials.
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h1 className={styles.sectionTitleBlack}>NuTags</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.text}>
              Technology is integrated more and more into our sport. 
              If you obsess over the post ride analytics or watch those helmet cam runs, 
              we've got something you will love. NuTags is a unique and competitive way to explore new locations. 
              Sign up as an ambassador to find out more.
            </div>
            <div className={styles.img}>NuTags img</div>
          </div>
        </div>

        <div className={styles.section} style={{backgroundColor: '#045680'}}>
          <h1 className={styles.sectionTitleWhite}>NuTunes</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.img}>NuTunes img</div>
            <div className={styles.text}>
              Rock, Drum & Bass, House, the list goes on. 
              What do you soundtrack your ride with? 
              Our playlist is updated on a weekly basis through suggestions from the community. 
              If you fancy adding your favourite tune to our playlist, 
              drop our socials a follow and let us know.
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h1 className={styles.sectionTitleBlack}>NuDays</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.text}>
              What's the point in building a community if we can't also build our sport? 
              NuDays offers you the opportunity to get involved at your local trail clean, dig day, group ride, and more. 
              You never know who you will meet there.
            </div>
            <div className={styles.img}>NuDays img</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About