import React, { useRef } from 'react'
import styles from './Contact.module.css'

function Contact() {

  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const message = useRef();

  const handleFormSubmit = async () => {

    const requestBody = {
      type: "contact_us",
      data: {
          email: email.current?.value,
          firstName: firstName.current?.value,
          lastName: lastName.current?.value,
          message: message.current?.value
      }
    }

    const requestOptions = {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(requestBody)
    };

    try {
      const response = await fetch('/api/v1/email', requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        console.log("The email was successfully sent!")
      }

    } catch (error) {
      console.log("Error:", error);
    }

    // Set the form field to blank
    document.getElementById('contactForm').reset();

    // Toast? or animated button?

  }
  
  return (
    <div className='content'>
      <p className='title'>Contact us</p>
      <div className='description'>
        <p>For any queries about NuZones, our operations, future plans, etc.</p>
        <p>Let us know by filling out the contact from down below.</p>
      </div>
      <form id='contactForm'>
        <div className={styles.form_row}>
          <input placeholder='First Name' type='text' ref={firstName} />
          <input placeholder='Last Name' type='text' ref={lastName} />
        </div>
        <input placeholder='Email' type='email' ref={email} />
        <textarea rows='4' placeholder='Message' ref={message} />
      </form>
      <button className={styles.submit} onClick={handleFormSubmit}>Submit</button>
    </div>
  )
}

export default Contact