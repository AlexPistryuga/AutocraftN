// src/components/HomeSection.tsx
import React from 'react';
import '../index.css'; // Путь к вашему CSS файлу

const HomeSection: React.FC = () => (
    <section className="home" id="home">
        <div className="home-text">
            <a href="/discover" className="btn">Discover Now</a>
        </div>
    </section>
);

export default HomeSection;
