import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer'

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Header/>
    <MainPage/>
    <Footer/>
  </div>
);
