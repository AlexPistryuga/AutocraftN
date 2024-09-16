import React from 'react';
import '../index.css';

const AboutSection: React.FC = () => (
    <section className="about container" id="about">
        <div className="about-img">
            <img src="/img/about.jpg" alt="About" />
        </div>
        <div className="about-text">
            <span>About Us</span>
            <h2>Cheap Prices With <br /> Quality Cars</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aut, blanditiis delectus dolor Lorem ipsum dolor sit amet, consectetur adipisicing </p>
            <a href="#" className="btn">Learn More</a>
        </div>
    </section>
);

export default AboutSection;
