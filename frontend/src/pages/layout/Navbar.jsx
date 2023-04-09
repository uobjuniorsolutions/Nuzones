import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_logo}>
          <Link to="/" onClick={menuOpen && handleMenuClick}>NuZones</Link>
        </div>

        <div id={styles.menu}>
          <div className={`${styles.menuBar} ${menuOpen ? styles.change : ''}`} onClick={handleMenuClick}>
            <div id={styles.bar1} className={styles.bar}></div>
            <div id={styles.bar2} className={styles.bar}></div>
            <div id={styles.bar3} className={styles.bar}></div>
          </div>
        </div>

        {/* I need to fix the Hover behavior */}

        <div className={styles.navbar_links}> 
          <ul>
            <li>
              <Link to="/zone" title='Find a Zone'>Find a Zone</Link>
            </li>
            <li>
              <Link to="/about" title='About us'>About us</Link>
            </li>
            <li>
              <Link to="/contact" title='Contact'>Contact</Link>
            </li>
          </ul>
        </div>

      </nav>

      <nav className={`${styles.nav} ${menuOpen ? styles.change : ''}`} id={styles.nav}>
        <ul>
          <li>
            <Link to="/zone" onClick={handleMenuClick}>Find a Zone</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleMenuClick}>About us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleMenuClick}>Contact</Link>
          </li>
        </ul>
      </nav>

      <div className={`${styles.menuBg} ${menuOpen ? styles.changeBg : ''}`} id={styles.menuBg}></div>
    </>
  )
}

export default Navbar