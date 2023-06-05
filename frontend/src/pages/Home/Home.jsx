import React, { useEffect, useState } from 'react'
import styles from './Home.module.css'
import BrandAmbassadorModal from '../Pop-up/BrandAmbassadorModal';
import { Link } from 'react-router-dom';
import CardSlider from './Instagram/CardSlider';

function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  const getInstaAccessToken = async () => {
    try {
      let response = await fetch('/api/v1/token')
      let data = await response.json()
      return data.token
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.content}>

      <div className={styles.adventures}>
        <p className={styles.heroTitle}>Discover NuZones</p>
        <div className={styles.bottomContainer}>
          <div className={styles.description}>
            <p>Looking for someone to join you on your whole day adventure?</p>
            <p>On <strong>Find a Zone</strong>, you'll find someone anywhere you go!</p> 
          </div>
          <div className={styles.buttonContainer}>
            <Link className='find_crew' to='/zone'>Find a Zone</Link>
            <BrandAmbassadorModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>
          </div>
        </div>
      </div>

      <div className={styles.sponsors}>
        <h1>Thoughts about NuZones</h1>
        <h2>There's no point in us telling you how great we are. So, we've got some of our ambassadors to tell you...</h2>
        <div className={styles.sponsorsPics}>
          <div className={styles.sponsorsElement}>
            <img src="./FinGraham.jpg"/>
            <div className={styles.nameAndSubheading}>
              <h2>Fin Graham</h2>
              <h3>World Champion</h3>
            </div>
            <p>"As a professional cyclist I ride across the globe. NuZones is great, it helps me connect with new riders to explore brand new zones"</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='./mudhuggerLogo.jpg' />
            <div className={styles.nameAndSubheading}>
              <h2>Mudhugger</h2>
              <h3>Industry Representative</h3>
            </div>
            <p>"Of course, cycling is more fun with others. NuZones is an obvious way to build up your crew and find that secret loam trail you've always been searching for"</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='./FinGraham.jpg' />
            <div className={styles.nameAndSubheading}>
              <h2>?</h2>
              <h3>?</h3>
            </div>
            <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam, consectetur eos!"</p>
          </div>
        </div>
      </div>

      <div className={styles.help}>
        <h1>How can NuZones help you?</h1>
          <div className={styles.helpImageContainer}>
            <div className={styles.helpFirstRow}>
              <img style={{transform: "rotate(12deg)"}} src='./Middle.jpg' alt='middle image'/>
              <div className={styles.helpTextBox}>
                <p>Whether you are looking to build your crew or discover new locations, an adventure is best done together.</p> 
                <p>If you are interested in receiving brand discount codes and hearing updates from the NuZones family, join the crew!</p>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                  <button style={{justifyContent: 'center'}} className='brand_ambassador' onClick={toggleModal}>Join the Crew</button>
                </div>
              </div>
            </div>
            <div className={styles.helpSecondRow}>
              <img style={{transform: "rotate(-14deg)"}} src='./Left.jpg' alt='left image'/>
              <img style={{transform: "rotate(4deg)"}} src='./Right.jpg' alt='right image'/>
            </div>
          </div>
      </div>

      <div style={{gap: '2rem'}} className={styles.sponsors}>
        <h1>Our Values</h1>
        <div className={styles.valuesContainer}>
          <div className={styles.valuesElement}>
            <div style={{backgroundImage: 'url(./CommunityOverlay.jpg)'}} className={styles.valuesImage}>
              <h2>Community</h2>
            </div>
            <p className={styles.valuesName}>Build your crew</p>
            <p className={styles.valuesDescription}>If you send that gap in a forest and no one is around to see, did it really happen?</p>
          </div>
          <div className={styles.valuesElement}>
            <div style={{backgroundImage: 'url(./AdventurousOverlay.jpg)'}} className={styles.valuesImage}>
              <h2>Adventurous</h2>
            </div>
            <p className={styles.valuesName}>Discover NuZones</p>
            <p className={styles.valuesDescription}>There's no better feeling than finding the ultimate set of corners you can rip all day long.</p>
          </div>
          <div className={styles.valuesElement}>
            <div style={{backgroundImage: 'url(./SustainabilityOverlay.jpg)'}} className={styles.valuesImage}>
              <h2>Sustainability</h2>
            </div>
            <p className={styles.valuesName}>Protect our environment</p>
            <p className={styles.valuesDescription}>No one likes seeing trash out on the trails, that's why we advocate removing waste when you can.</p>
          </div>
        </div>
      </div>

      <div className={styles.instagram}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1>Find us on Instagram</h1>
          <h3>Check at our Instagram at <a style={{ color: 'blue', textDecoration: 'none'}} href='https://www.instagram.com/nuzones/' target='_blank'>@nuzones</a></h3>
        </div>
        <CardSlider accessToken={getInstaAccessToken()} />
      </div>

    </div>
  )
}

export default Home