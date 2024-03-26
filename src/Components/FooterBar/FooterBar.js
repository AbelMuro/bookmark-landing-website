import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function FooterBar() {
    return(
        <footer className={styles.footer}>
            <section className={styles.footer_content}>
                <ul className={styles.footer_links}>
                    <li>
                        <img className={styles.footer_logo} src={icons['logo']}/>
                    </li>
                    <li>
                        <a className={styles.footer_link}>
                            features
                        </a>
                    </li>
                    <li>
                        <a className={styles.footer_link}>
                            pricing
                        </a>
                    </li>
                    <li>
                        <a className={styles.footer_link}>
                            contact
                        </a>
                    </li>
                </ul>

                <ul className={styles.footer_social}>
                    <li className={styles.footer_social_link}></li>
                    <li className={styles.footer_social_link}></li>
                </ul>                
            </section>

            
        </footer>
    )
}

export default FooterBar;