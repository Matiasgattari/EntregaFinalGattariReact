import React from 'react';
import Card from './components/cards/card.jsx';
import NavBar from './components/navbar/navbar.jsx'

const App = () => {

    
    return (

        <>


            <NavBar />
            <div className='d-flex flex-row flex-wrap'>
                <Card tipo="RUBIA" />
                <Card tipo="ROJA" />
                <Card tipo="NEGRA" />
                <Card tipo="HONEY" />
            </div>











        </>
    );
}

export default App;
