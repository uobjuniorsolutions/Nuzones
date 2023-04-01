import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'
import styles from './Footer.module.css'

import BrandAmbassadorModal from '../Pop-up/BrandAmbassadorModal'

function Footer() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  function toggleModal() {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <footer>
      <p className='getInTouch'>Get in touch</p>
      <button className='brand_ambassador' onClick={toggleModal}>Become a Brand Ambassador</button>

      <BrandAmbassadorModal toggleModal={toggleModal} isModalOpen={isModalOpen}/>

      <div className={styles.socialmedia}>
        <a href='https://www.facebook.com' target="_blank" rel='noreferrer'>
          <BsFacebook />
        </a>
        <a href='https://www.instagram.com' target="_blank" rel='noreferrer'>
          <BsInstagram />
        </a>
        <a href='https://www.tiktok.com' target="_blank" rel='noreferrer'>
          <BsTiktok />
        </a>
      </div>
    </footer>
  )
}

export default Footer