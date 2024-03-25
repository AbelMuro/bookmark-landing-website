import React from 'react';
import styles from './styles.module.css';
import Accordion from './Accordion';
import answers from './Questions';

function FAQ() {
    return(
        <section className={styles.faq}>
            <h1 className={styles.faq_title}>
                Frequently Asked Questions
            </h1>
            <p className={styles.faq_desc}>
                Here are some of our FAQs. 
                If you have any other questions you’d like 
                answered please feel free to email us.
            </p>
            <Accordion question='What is a Bookmark?' answer={answers['What is a Bookmark?']}/>
            <Accordion question='How can I request a new browser?' answer={answers['How can I request a new browser?']}/>
            <Accordion question='Is there a mobile app?' answer={answers['Is there a mobile app?']}/>
            <Accordion question='What about other Chromium browsers?' answer={answers['What about other Chromium browsers?']}/>
            <button className={styles.faq_button}>
                More Info
            </button>
        </section>
    )
}

export default FAQ;