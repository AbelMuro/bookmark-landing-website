import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Features from './Components/Features';
import Extensions from './Components/Extensions';
import FAQ from './Components/FAQ';
import ContactUs from './Components/ContactUs';
import FooterBar from './Components/FooterBar';
import './styles.css'

function App() {
    return(
            <main>
                <NavigationBar/>
                <Header/>
                <Features/>
                <Extensions/>
                <FAQ/>
                <ContactUs/>
                <FooterBar/>
                <div className='bg_one'></div>
            </main>
     )
}

export default App;