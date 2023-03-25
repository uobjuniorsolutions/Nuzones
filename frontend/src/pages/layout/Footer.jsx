import React from 'react'
import { BsFacebook, BsInstagram, BsTiktok } from 'react-icons/bs'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer>
      <p className='getInTouch'>Get in touch</p>
      <button className='brand_ambassador'>Become a Brand Ambassador</button>
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