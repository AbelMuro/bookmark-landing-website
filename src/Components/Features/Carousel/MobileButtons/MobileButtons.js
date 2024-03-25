import React, {useEffect} from 'react';
import styles from './styles.module.css';

function MobileButtons({feature, handleFeature}) {

    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.features_select);

        Array.from(allButtons).forEach((button) => {
            button.style.color = ''
        });

        Array.from(allButtons).forEach((button) => {
            let currentFeature = button.getAttribute('data-feature');
            if(currentFeature === feature)
                button.style.color = '#242A45';
        });

    }, [feature]) 

    return(
        <section className={styles.features} onClick={handleFeature}>
            <button className={styles.features_select} data-feature='Simple Bookmarking'>
                Simple Bookmarking
                {feature === 'Simple Bookmarking' && <div className={styles.underline}></div>}
            </button>
            <button className={styles.features_select} data-feature='Speedy Searching'>
                Speedy Searching
                {feature === 'Speedy Searching' && <div className={styles.underline}></div>}
            </button>
            <button className={styles.features_select} data-feature='Easy Sharing'>
                Easy Sharing
                {feature === 'Easy Sharing' && <div className={styles.underline}></div>}
            </button>
        </section>
    )
}

export default MobileButtons;