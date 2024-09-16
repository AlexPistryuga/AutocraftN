import React from 'react';
import '../index.css'; // Путь к вашему CSS файлу

const Header: React.FC = () => (
    <header>
        <div className="nav container">
            <i className='bx bx-menu' id="menu-icon"></i>
            <img src="img/logo.png" className="logo" id="site-logo" alt="Logo" />
            <ul className="navbar">
                <li><a href="#home" className="active">Home</a></li>
                <li><a href="#cars">Cars</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#parts">Parts</a></li>
                <li><a href="#blog">Our Blog</a></li>
            </ul>
            <i className='bx bx-search' id="search-icon"></i>
            <div className="search-box container">
                <input type="search" placeholder="Search here..." />
            </div>
        </div>
    </header>
);

export default Header;
