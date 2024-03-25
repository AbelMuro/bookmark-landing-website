import React from 'react';
import styles from './styles.module.css';
import icons from './icons';

function Extensions() {
    return(
        <section className={styles.extensions}>
            <h1 className={styles.extensions_title}>
                Download the extension
            </h1>
            <p className={styles.extensions_desc}>
                We’ve got more browsers in the pipeline. 
                Please do let us know if you’ve got a 
                favourite you’d like us to prioritize.
            </p>
            <article className={styles.extensions_browser}>
                <img src={icons['chrome']}/>
                <h2>
                    Add to Chrome
                </h2>
                <p>
                    Minimum version 62
                </p>
                <img src={icons['dots']}/>
                <button>
                    Add & Install Extension
                </button>
            </article>
            <article className={styles.extensions_browser}>
                <img src={icons['firefox']}/>
                <h2>
                    Add to Firefox
                </h2>
                <p>
                    Minimum version 55
                </p>
                <img src={icons['dots']}/>
                <button>
                    Add & Install Extension
                </button>
            </article>
            <article className={styles.extensions_browser}>
                <img src={icons['opera']}/>
                <h2>
                    Add to Opera
                </h2>
                <p>
                    Minimum version 46
                </p>
                <img src={icons['dots']}/>
                <button>
                    Add & Install Extension
                </button>
            </article>
        </section>
    )
}

export default Extensions;