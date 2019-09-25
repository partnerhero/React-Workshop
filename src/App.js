import React from 'react';
import './App.css';

import ColorSelector from './components/ColorSelector';
import BasicForm from './components/BasicForm';

const App = () => {
    return (
        <div className='container'>
            <div className='centered'>
                <ColorSelector/>
                <BasicForm />
            </div>
        </div>
    );
};

export default App;