import React from 'react';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import Header from './components/Header';

export default function App() {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter/>
        </BrowserRouter>
    );
};