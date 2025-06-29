import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default function RouterWrapper(){
    return(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        );
}