import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {OfertoryProvider} from './components/Context';

ReactDOM.render(
    <OfertoryProvider>
        <Router>
            <App />
        </Router> 
    </OfertoryProvider>,
    document.getElementById('root'));

