import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';

function Carousel() {
    const [feature, setFeature] = useState('Simple Bookmarking');

    const handleFeature = (e) => {
        if(!e.target.matches('button')) return;
        let feature = e.target.getAttribute('data-feature');
        setFeature(feature);
    }

    return(
        <section className={styles.features_select} onClick={handleFeature}>
            <button className={styles.features_button} data-feature='Simple Bookmarking'>
                Simple Bookmarking
            </button>
            <button className={styles.features_button} data-feature='Speedy Searching'>
                Speedy Searching
            </button>
            <button className={styles.features_button} data-feature='Easy Sharing'>
                Easy Sharing
            </button>
            {feature === 'Simple Bookmarking'&& <div className={styles.features_line}></div>}
            {feature === 'Speedy Searching' && <div className={styles.features_line}></div>}
            {feature === 'Easy Sharing' && <div className={styles.features_line}></div>}
        </section>
        )
}

export default Carousel