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
            <div className={styles.image}>
              <img src='./NuPics.jpg'/>
            </div>
            <div className={styles.textBlueSection}>
              <h2>Outdoor adventures are meant to be shared with others.</h2>
              <div className={styles.nupicsList}>
                <div className={styles.nupicsListItem}>
                  <h3>1.</h3>
                  <p>Take a pic or a video of a moment you want to share.</p>
                </div>
                <div className={styles.nupicsListItem}>
                  <h3>2.</h3>
                  <p>Tag us and use the #nupics.</p>
                </div>
                <div className={styles.nupicsListItem}>
                  <h3>3.</h3>
                  <p>Publish to appear on our socials!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h1 className={styles.sectionTitleBlack}>NuTags</h1>
          <div className={`${styles.sectionContainer} ${styles.reverse}`}>
            <div className={styles.textWhiteSection}>
              <div className={styles.nutagsListElem}>
                <div className={styles.square}></div>
                <p>NuTags is a unique and competitive way to explore new locations!</p>
              </div>
              <div className={styles.nutagsListElem}>
                <p>We are constantly setting up Tags for you to scan around tracks.</p>
                <div className={styles.square}></div>
              </div>
              <div className={styles.nutagsListElem}>
                <div className={styles.square}></div>
                <p>Scan all Tags from a track and compete with others on duration!</p>
              </div>
            </div>
            <div className={styles.image}>
              <img src='./NuTags.jpg'/>
            </div>
          </div>
        </div>

        <div className={styles.section} style={{backgroundColor: '#045680'}}>
          <h1 className={styles.sectionTitleWhite}>NuTunes</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.image}>
              <img src='./NuTunes.jpg'/>
            </div>
            <div className={styles.textBlueSection}>
              <h2>Rock, Drum & Bass, House, the list goes on.</h2> 
              <div className={styles.nupicsList}>
                <div className={styles.nupicsListItem}>
                  <div className={styles.circle}></div>
                  <p>Ride and explore with the best soundtrack.</p>
                </div>
                <div className={styles.nupicsListItem}>
                  <div className={styles.circle}></div>
                  <p>Weekly updated playlist through community suggestions.</p>
                </div>
                <div className={styles.nupicsListItem}>
                  <div className={styles.circle}></div>
                  <p>Drop our socials a follow and let us know which track we can add!</p>
                </div>
              </div>
              <div className={styles.buttonNutunes}>
                <button>Go to playlist</button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <h1 className={styles.sectionTitleBlack}>NuDays</h1>
          <div className={`${styles.sectionContainer} ${styles.reverse}`}>
            <div className={styles.textWhiteSection}>
              <div className={styles.nudaysContainer}>
                <p>What's the point in building a community if we can't also build our sport?</p> 
                <p>NuDays offers you the opportunity to get involved at your local trail clean, dig day, group ride, and more.</p>
                <p>You never know who you will meet there.</p>
              </div>
              <h2 style={{ fontWeight: 500 }}>Coming soon...</h2>
            </div>
            <div className={styles.image}>
              <img src='./NuDays.jpg'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About