import React from 'react'
import styles from './About.module.css'

function About() {
  return (
    <div className='content'>
      <h1 className='title'>What's in the NuZones family</h1>
      <div className='description'>
        <p>An adventure is much more than who you went with.</p>
        <p>Its what tune you had on, crazy videos, and exploring new zones.</p>
        <p>Whatever you're into the NuZones family can help!</p>
      </div>

      {/* Fix the pb with img not same size when I'll have the img */}

      <div className={styles.blocks}>
        <div className={styles.section} style={{backgroundColor: '#045680', paddingBottom: '5rem'}}>
          <h1 className={styles.sectionTitleWhite}>NuPics</h1>
          <div className={styles.sectionContainer}>
            <div className={styles.imageNupics} style={{ position: 'relative' }}>
              <img src='./NuPics.jpg' style={{ position: 'absolute', zIndex: 1 }}/>
              <div className={styles.circleNupics} style={{ position: 'absolute', top: '-2.5rem', left: '2.5rem', }} />
              <div className={styles.circleNupics} style={{ position: 'absolute', bottom: '-2.5rem', right: '1.5rem' }} />
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
                <div className={styles.square}>
                  <img src='./tickbox.png' width='60px' height='60px' />
                </div>
                <p>NuTags is a unique and competitive way to explore new locations!</p>
              </div>
              <div className={styles.nutagsListElem}>
                <p>We are constantly setting up Tags for you to scan around tracks.</p>
                <div className={styles.square}>
                  <img src='./nfc.png' width='60px' height='60px' />
                </div>
              </div>
              <div className={styles.nutagsListElem}>
                <div className={styles.square}>
                  <img src='./stopwatch.png' width='60px' height='60px' />
                </div>
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
                <button>
                  <a href='https://open.spotify.com/user/31o4crzycczfnzo6orfgs5o5pvba?si=C47mw-4ES5SoQNC6Enq5wg' target='_blank'>Go to playlist</a>
                </button>
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