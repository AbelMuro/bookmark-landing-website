import React from 'react';
import styles from './styles.module.css';
import images from './images'

//   filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.50));

function Header() {
    return(
        <header className={styles.header}>
            <section className={styles.header_content}>
                <h1>
                    A Simple Bookmark Manager
                </h1>
                <p>
                    A clean and simple interface to organize your favourite websites. 
                    Open a new browser tab and see your sites load instantly. 
                    Try it for free.
                </p>
                <button className={styles.header_button}>
                    Get it on Chrome
                </button>
                <button className={styles.header_button}>
                    Get it on Firefox
                </button>
            </section>
            <div className={styles.image_container}>
                <img className={styles.header_image} src={images['tablet']}/>
            </div>  
        </header>
    )
}

export default Header;