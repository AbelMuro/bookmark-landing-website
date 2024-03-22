import React from 'react';
import NavigationBar from './Components/NavigationBar';
import Header from './Components/Header';
import Features from './Components/Features'
import './styles.css'

function App() {
    return(
            <main>
                <NavigationBar/>
                <Header/>
                <Features/>
                <div className='bg_one'></div>
            </main>
     )
}

export default App;