import React, {useState} from 'react';
import styles from './styles.module.css';
import globalIcons from '/public/global/icons';
import localIcons from './icons';
import {AnimatePresence, motion} from 'framer-motion';
import { itemVariant, menuVariant } from './Variants';

//create animation with clip-path: circle(20px at 30px 35px)  

function MobileNavBar() {
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen(!open);
    }

    return(
        <>
            <nav className={styles.nav}>
                <img className={styles.nav_logo} src={globalIcons['logo']}/>
                <button className={styles.nav_menu} onClick={handleOpen}>
                    <img src={localIcons['menu']}/>
                </button>
            </nav>   
            <AnimatePresence>
                {open && 
                <motion.menu 
                    className={styles.menu} 
                    initial='hidden' 
                    animate='show'
                    exit='exit'
                    variants={menuVariant}>
                    <motion.img className={styles.menu_logo} src={localIcons['logo']} variants={itemVariant}/>
                    <motion.img className={styles.menu_close} src={localIcons['close']} onClick={handleOpen} variants={itemVariant}/>
                    <ul className={styles.menu_buttons}>
                        <motion.li variants={itemVariant}>
                            <button className={styles.menu_button}>
                                features
                            </button>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                            <button className={styles.menu_button}>
                                pricing
                            </button>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                            <button className={styles.menu_button}>
                                contact
                            </button>
                        </motion.li>
                        <motion.li variants={itemVariant}>
                            <button className={styles.menu_login}>
                                login
                            </button>
                        </motion.li>
                    </ul>
                    <ul className={styles.menu_social}>
                        <li>
                            <motion.img className={styles.menu_facebook} src={localIcons['facebook']} variants={itemVariant}/>
                        </li>
                        <li>
                            <motion.img className={styles.menu_twitter} src={localIcons['twitter']} variants={itemVariant}/>
                        </li>
                    </ul>
                </motion.menu>}             
            </AnimatePresence>     

        </>

    )
}

export default MobileNavBar;