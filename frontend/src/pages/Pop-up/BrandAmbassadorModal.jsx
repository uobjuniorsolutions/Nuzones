import React, { useRef } from 'react'
import Modal from 'react-modal'

import styles from './BrandAmbassadorModal.module.css'

function BrandAmbassadorModal(props) {

    const {toggleModal, isModalOpen} = props;

    const sendAmbassadorEmail = async () => {
        const requestBody = {
            type: "ambassador_sign_up",
            data: {
                email: email.current?.value,
                firstName: firstName.current?.value,
                lastName: lastName.current?.value
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
        document.getElementById('contactModal').reset();

        // Before toggling the modal, add animation to the button saying whether or not sent the form

        //Then, toggle the modal
    }

    const firstName = useRef()
    const lastName = useRef()
    const email = useRef()

    return (
        <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
            overlay: {
                backgroundColor: 'rgba(0, 0, 0, 0.5)'
            },
            content: {
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: '#fff',
                padding: '2rem',
                borderRadius: '0.5rem'
            }
        }}
        >
            <div className={styles.modal}>
                <h1 className={styles.title}>Want to become part of the crew?</h1>
                <p className={styles.subtitle}>Fill the form below and we will reach out as soon as possible!</p>
                <form id='contactModal' className={styles.form}>
                    <div className={styles.form_row}>
                        <input placeholder='First name' ref={firstName}/>
                        <input placeholder='Last name'ref={lastName}/>
                    </div>
                    <input className={styles.email} placeholder='Email' ref={email}/>
                </form>
                <div className={styles.button_row}>
                    <button className={styles.submit} onClick={sendAmbassadorEmail}>Submit</button>
                    <button className={styles.cancel} onClick={toggleModal}>Close</button>
                </div>
            </div>

        </Modal>
    )
}

export default BrandAmbassadorModal