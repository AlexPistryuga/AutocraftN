// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import SearchMenu from './components/SearchMenu';
import Parts from './components/Parts';
import Companies from './components/Companies';
import Blog from './components/Blog';
import Cars from './components/Cars';
import './index.css';
import '/src/assets/responsitive.css';
import Services from "./components/Services.tsx";

const App: React.FC = () => (
    <Router>
        <div>
            <Header />
            <HomeSection />
            <Cars />
            <AboutSection />
            <Services/>
                        <Parts />
            <SearchMenu />
            <Companies />
            <Blog />
            <Footer />
            <Copyright />
        </div>
    </Router>
);

export default App;
