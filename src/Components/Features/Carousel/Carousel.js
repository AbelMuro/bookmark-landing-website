import React, {useState, useEffect} from 'react';
import styles from './styles.module.css';
import {motion} from 'framer-motion';
import carouselData from './carousel-data';
import images from './images';
import {fadeInOutVariant} from './Variants';

function Carousel() {
    const [feature, setFeature] = useState('Simple Bookmarking');

    const imageProps = {
        variants: fadeInOutVariant,
        initial: 'hidden',
        animate: 'show',
    }

    const getTitle = () => {
        return carouselData[feature].title;
    }

    const getDesc = () => {
        return carouselData[feature].desc;
    }

    const handleFeature = (e) => {
        if(!e.target.matches('button')) return;
        let feature = e.target.getAttribute('data-feature');
        setFeature(feature);
    }

    useEffect(() => {
        const allButtons = document.querySelectorAll('.' + styles.features_button);

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
        <>
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
                {feature === 'Simple Bookmarking' && <motion.div layoutId='underline' className={styles.line_one}></motion.div>}
                {feature === 'Speedy Searching' && <motion.div layoutId='underline' className={styles.line_two}></motion.div>}
                {feature === 'Easy Sharing' && <motion.div layoutId='underline' className={styles.line_three}></motion.div>}
            </section>
            <section className={styles.carousel}>
                {feature === 'Simple Bookmarking' && <motion.img className={styles.carousel_image} src={images['bookmark']} key='1' {...imageProps}/>}
                {feature === 'Speedy Searching' && <motion.img className={styles.carousel_image} src={images['searching']} key='2' {...imageProps}/>}
                {feature === 'Easy Sharing' && <motion.img className={styles.carousel_image} src={images['sharing']} key='3' {...imageProps}/>}                    
                <div className={styles.carousel_content}>
                    <h2>
                        {getTitle()}
                    </h2>
                    <p>
                        {getDesc()}
                    </p>
                    <button>
                        More Info
                    </button>
                </div>
            </section>
        </>

        )
}

export default Carousel