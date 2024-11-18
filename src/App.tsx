import React from 'react';
import './App.css';
import Navbar from "./layouts/header-footer/Navbar";
import Footer from "./layouts/header-footer/Footer";
import HomePage from "./layouts/homepage/HomePage";
import { getListBook } from './api/SachAPI';

function App() {

    getListBook().then().catch();
    return(
        <div>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </div>
    )
}

export default App;
