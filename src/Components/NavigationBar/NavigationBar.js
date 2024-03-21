import React from 'react';
import useMediaQuery from '~/Hooks/useMediaQuery.js';
import MobileNavBar from './MobileNavBar';
import styles from './styles.module.css';
import icons from '/public/global/icons';

function NavigationBar() {
    const [mobile] = useMediaQuery('(max-width: 600px)');

    return mobile ? <MobileNavBar/> : 
        <nav className={styles.nav}>
            <img className={styles.nav_logo} src={icons['logo']}/>
            <ul className={styles.nav_links}>
                <li>
                    <a className={styles.nav_link}>features</a>
                </li>
                <li>
                    <a className={styles.nav_link}>pricing</a>
                </li>
                <li>
                    <a className={styles.nav_link}>contact</a>
                </li>
                <li>
                    <button className={styles.nav_login}>
                        login
                    </button>
                </li>
            </ul>
        </nav>
    
}

export default NavigationBar;