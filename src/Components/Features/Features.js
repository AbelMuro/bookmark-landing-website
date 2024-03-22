import React from 'react';
import Carousel from './Carousel';
import styles from './styles.module.css';

function Features() {
    return(
        <article className={styles.features}>
            <h2 className={styles.features_title}>
                Features
            </h2>
            <p className={styles.features_desc}>
                Our aim is to make it quick and easy 
                for you to access your favourite websites. 
                Your bookmarks sync between your devices 
                so you can access them on the go.
            </p>
            <Carousel/>
        </article>
    )
}

export default Features;