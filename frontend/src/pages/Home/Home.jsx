import React, { useState } from 'react'
import styles from './Home.module.css'
import BrandAmbassadorModal from '../Pop-up/BrandAmbassadorModal';
import { Link } from 'react-router-dom';

function Home() {

  // Could add a scroll down thingy below share your adventures?
  // Add hover effects?

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <div className={styles.content}>

      <div className={styles.adventures}>
        <p className={styles.heroTitle}>Discover NuZones</p>
        <div className={styles.bottomContainer}>
          <div className={styles.description}>
            <p>Located everywhere and anywhere, we are NuZones.</p> 
            <p>Whether you are looking to build your crew or discover new locations, <br />an adventure is best done together.</p>
          </div>
          <div className={styles.buttonContainer}>
            <button className='find_crew'>
              <Link to='/zone'>Find a Zone</Link>
            </button>
            <button className='brand_ambassador' onClick={toggleModal} >Become a Brand Ambassador</button>

            <BrandAmbassadorModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>

          </div>
        </div>
      </div>

      <div className={styles.videoContainer}>
        <div className={styles.video}> Video </div>
        <div className={styles.videoText}>
          <p>Intro text for the promo video</p>
          <button className='find_crew'>
            <Link to='/zone'>Find a Zone</Link>
          </button>
        </div>
      </div>

      <div className={styles.sponsors}>
        <h1>Thoughts about NuZones</h1>
        <h2>There's no point in us telling you how great we are. So, we've got some of our ambassadors to tell you...</h2>
        <div className={styles.sponsorsPics}>
          <div className={styles.sponsorsElement}>
            <img src="./FinGraham.jpg"/>
            <h2>Fin Graham</h2>
            <p>"As a professional cyclist I ride across the globe. NuZones is great, it helps me connect with new riders to explore brand new zones"</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='./OrangeMudhuggerLogo(Preferred).jpg' />
            <h2>Mudhugger</h2>
            <p>"Of course, cycling is more with others. NuZones is an obvious way to build up your crew and find that secret loam trail you've always been searching for"</p>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='Brand3.png' />
            <p>WAITING FOR THIS ONE</p>
          </div>
        </div>
      </div>

      <div className={styles.help}>
        <h1>How can NuZones help you?</h1>
        <div className={styles.helpContainer}>
          <div className={styles.helpTextBox}>Whether you are looking for someone to join you on your power hour or a whole day adventure, we've got you covered. Head to our 'Find a Zone' page and look for groups either in your area or somewhere you are planning to go.</div>
          <div className={styles.helpImageContainer}>
            <img src='./Left.jpg' alt='left image'/>
            <img src='./Middle.jpg' alt='middle image'/>
            <img src='./Right.jpg' alt='right image'/>
          </div>
        </div>
      </div>

      <div className={styles.sponsors}>
        <h1>Our Values</h1>
        <div className={styles.sponsorsPics}>
          <div className={styles.sponsorsElement}>
            <img src="./Community.jpg"/>
            <p className={styles.valuesName}>Community</p>
            <div className={styles.valuesTextBox}>Build your crew. If you send that gap in a forest and no one is around to see, did it really happen?</div>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='./Adventurous.jpg' />
            <p className={styles.valuesName}>Adventurous</p>
            <div className={styles.valuesTextBox}>Discover NuZones. There's no better feeling than finding the ultimate set of corners you can rip all day long. Join a group and get adventuring.</div>
          </div>
          <div className={styles.sponsorsElement}>
            <img src='./Sustainability.jpg' />
            <p className={styles.valuesName}>Sustainability</p>
            <div className={styles.valuesTextBox}>Protect our environment. No one likes seeing trash out on the trails, that's why we advocate removing waste when you can. Whether it's joining an organised clean-up or just carrying a black bag on your ride, we want to look after our planet.</div>
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