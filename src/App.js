import React from 'react';
import './App.css';

import ColorSelector from './components/ColorSelector';
import BasicForm from './components/BasicForm';

import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore();

const App = () => {
    return (
        <Provider store={store} >
            <div className='container'>
                <div className='centered'>
                    <ColorSelector/>
                    {/* <BasicForm /> */}
                </div>
            </div>
        </Provider>
    );
};

export default App;