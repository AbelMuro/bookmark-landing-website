import React from 'react';
import styles from './styles.module.css';
import globalIcons from '/public/global/icons';
import localIcons from './icons';
import {motion} from 'framer-motion';

//create animation with clip-path: circle(20px at 30px 35px)  

function MobileNavBar() {
    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={globalIcons['logo']}/>
                <button className={styles.nav_menu}>
                    <img src={localIcons['menu']}/>
                </button>
            </nav>        
            <menu className={styles.menu}>
                <img className={styles.menu_logo} src={localIcons['logo']}/>
                <img className={styles.menu_close} src={localIcons['close']}/>
                <ul className={styles.menu_links}>
                    <li>
                        <button className={styles.menu_link}>
                            features
                        </button>
                    </li>
                    <li>
                        <button className={styles.menu_link}>
                            pricing
                        </button>
                    </li>
                    <li>
                        <button className={styles.menu_link}>
                            contact
                        </button>
                    </li>
                    <li>
                        <button className={styles.menu_login}>
                            login
                        </button>
                    </li>
                </ul>
                <ul className={styles.menu_social}>
                    <li>
                        <img className={styles.menu_facebook} src={localIcons['facebook']}/>
                    </li>
                    <li>
                        <img className={styles.menu_twitter} src={localIcons['twitter']}/>
                    </li>
                </ul>
            </menu>
        </>

    )
}

export default MobileNavBar;