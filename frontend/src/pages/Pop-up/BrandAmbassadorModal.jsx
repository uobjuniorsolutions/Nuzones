import React, { useState } from 'react'
import Modal from 'react-modal'

import styles from './BrandAmbassadorModal.module.css'

function BrandAmbassadorModal(props) {

    const {toggleModal, isModalOpen} = props;

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
                <h1 className={styles.title}>Want to become a Brand Ambassador?</h1>
                <p className={styles.subtitle}>Fill the form below and we will reach out as soon as possible!</p>
                <form className={styles.form}>
                    <div className={styles.form_row}>
                        <input placeholder='First name'/>
                        <input placeholder='Last name'/>
                    </div>
                    <input className={styles.email} placeholder='Email'/>
                </form>
                <div className={styles.button_row}>
                    <button className={styles.cancel} onClick={toggleModal}>Cancel</button>
                    <button className={styles.submit}>Submit</button>
                </div>
            </div>

        </Modal>
    )
}

export default BrandAmbassadorModal