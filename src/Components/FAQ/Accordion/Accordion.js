import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';

function Accordion({question, answer}) {
    const [open, setOpen] = useState(false);
    const arrowRef = useRef();
    const accordionRef = useRef();

    const handleOpen = () => {
        setOpen(!open);
    }

    useEffect(() => {
        if(open){
            accordionRef.current.style.maxHeight = '610px';
            arrowRef.current.style.transform = 'rotate(180deg)';
            arrowRef.current.style.backgroundColor = '#FA5959';
        }
        else{
            accordionRef.current.style.maxHeight = ''
            arrowRef.current.style.transform = ''; 
            arrowRef.current.style.backgroundColor = '';
        }
    }, [open])

    return(
        <div className={styles.accordion} onClick={handleOpen} ref={accordionRef}>
            <h2>
                {question}
            </h2>
            <div className={styles.arrow} ref={arrowRef}/>
            <p>
                {answer}
            </p>
        </div>
    )
}

export default Accordion;