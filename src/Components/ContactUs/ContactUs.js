import React from 'react';
import Form from './Form';
import styles from './styles.module.css';

function ContactUs() {
    return(
        <section className={styles.contact}>
            <div className={styles.contact_content}>
                <h2>
                    35,000+ already joined
                </h2>
                <h1>
                    Stay up-to-date with what we’re doing
                </h1>
                <Form/>                
            </div>

        </section>
    )
}

export default ContactUs;