import React from 'react'
import styles from './Contact.module.css'

function Contact() {

  // Will need to have useState for states of the form
  // Not responsive! Need to fix that!

  return (
    <div className='content'>
      <p className='title'>Contact us</p>
      <div className='description'>
        <p>For any queries about NuZones, our operations, future plans, etc.</p>
        <p>Let us know by filling out the contact from down below.</p>
      </div>
      <form>
        <div className={styles.form_row}>
          <input placeholder='First Name' type="text" />
          <input placeholder='Last Name' type="text" />
        </div>
        <input placeholder='Email' type='email' />
        <textarea rows='4' placeholder='Message'/>
      </form>
      <button className={styles.submit}>Submit</button>
    </div>
  )
}

export default Contact