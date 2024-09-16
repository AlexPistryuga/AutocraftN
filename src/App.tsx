import React from 'react';
import ReactDOM from 'react-dom/client';
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
import Cart from './components/Cart';
import './index.css';
import '/src/assets/responsitive.css';

const App: React.FC = () => (
    <div>
        <Header />
        <HomeSection />
        <Cars />
        <AboutSection />
        <Parts />
            <SearchMenu />
            <Companies />
            <Blog />
        <Footer />
        <Copyright />
        <Cart />
    </div>
);

export default App;

