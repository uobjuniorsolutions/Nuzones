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

    const response = await fetch('/api/v1/email', requestOptions);

    console.log(response);

    // Add a way to check if the call was successfull or not (maybe using response code?)

    // Set the form field to blank

    // Toast? or animated button?

  }
  
  return (
    <div className='content'>
      <p className='title'>Contact us</p>
      <div className='description'>
        <p>For any queries about NuZones, our operations, future plans, etc.</p>
        <p>Let us know by filling out the contact from down below.</p>
      </div>
      <form>
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