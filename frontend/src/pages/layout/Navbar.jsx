import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_logo}>
        <Link to="/">NuZones</Link>
      </div>
      <div className={styles.navbar_links}>  
        <Link to="/zone">Find a Zone</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  )
}

export default Navbar