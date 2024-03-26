import React, {useState, useEffect, useRef} from 'react';
import styles from './styles.module.css';
import icons from './icons';

function Form() {
    const [email, setEmail] = useState('');
    const inputRef = useRef();
    const emptyMessageRef = useRef();
    const invalidMessageRef = useRef();
    const errorIconRef = useRef();
    const fieldsetRef = useRef();

    const displayEmptyErrorStyles = () => {
        errorIconRef.current.style.transform = 'scale(1)';
        inputRef.current.style.border = '2px solid #FA5959';
        fieldsetRef.current.style.backgroundColor = '#FA5959'
        emptyMessageRef.current.style.display = 'flex';
        setTimeout(() => {
            if(!emptyMessageRef.current) return;
            emptyMessageRef.current.style.height = '22px';
        }, 10)
    }

    const displayInvalidErrorStyles = () => {
        errorIconRef.current.style.transform = 'scale(1)';
        inputRef.current.style.border = '2px solid #FA5959';
        fieldsetRef.current.style.backgroundColor = '#FA5959'
        invalidMessageRef.current.style.display = 'flex';
        setTimeout(() => {
            if(!invalidMessageRef.current) return;
            invalidMessageRef.current.style.height = '22px';
        }, 10)
    }

    const removeErrorStyles = () => {
        errorIconRef.current.style.transform = '';
        emptyMessageRef.current.style.height = '';
        invalidMessageRef.current.style.height = '';
        inputRef.current.style.border = '';
        fieldsetRef.current.style.backgroundColor = ''
        setTimeout(() => {
            if(!emptyMessageRef.current || !invalidMessageRef.current) return;
            emptyMessageRef.current.style.display = '';
            invalidMessageRef.current.style.display = '';
        }, 200) 
    }

    const handleEmail = (e) => {
        e.target.setCustomValidity('');
        setEmail(e.target.value);
    }

    const handleBlur = (e) => {
        let isEmpty = e.target.validity.valueMissing;
        let isInvalid = e.target.validity.typeMismatch;

        if(isEmpty){
            displayEmptyErrorStyles();
        }
            
        else if(isInvalid){
            displayInvalidErrorStyles()
        }
    }

    const handleInvalid = (e) => {
        e.target.setCustomValidity(' ');
        let isEmpty = e.target.validity.valueMissing;

        if(isEmpty)
            displayEmptyErrorStyles();
        else
            displayInvalidErrorStyles();
    }

    const handleSubmit = () => {
        console.log('Email has been submitted');
    }

    useEffect(() => {
        removeErrorStyles();
    }, [email])

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            <fieldset ref={fieldsetRef}>
                <input 
                    type='email' 
                    placeholder='Enter your email address' 
                    value={email} 
                    onChange={handleEmail}
                    onBlur={handleBlur}
                    onInvalid={handleInvalid}
                    ref={inputRef}
                    required/>    
                <div className={styles.errorMessage} ref={emptyMessageRef}>
                    Whoops, don't leave this blank.
                </div>
                <div className={styles.errorMessage} ref={invalidMessageRef}>
                    Whoops, make sure it's an email.
                </div>         
                <img className={styles.errorIcon} src={icons['error']} ref={errorIconRef}/>           
            </fieldset>
            <input type='submit' value='Contact Us'/>
        </form>
    )
}

export default Form;