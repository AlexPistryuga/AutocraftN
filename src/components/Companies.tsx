import React from 'react';
import '../index.css';

interface Company {
    imgSrc: string;
    name: string;
}

const companies: Company[] = [
    { imgSrc: 'img/com/comp1.png', name: 'Automall' },
    { imgSrc: 'img/com/comp2.png', name: 'Eurogarage' },
    { imgSrc: 'img/com/comp3.png', name: 'Coleso' },
    { imgSrc: 'img/com/com3_1.png', name: 'Autodoc' }
];

const Companies: React.FC = () => {
    return (
        <section className="companies" id="companies">
            <div className="heading">
                <span>Our Partners</span>
                <h2>Companies We Work With</h2>
            </div>
            <div className="companies-container container">
                {companies.map(company => (
                    <div className="company-box" key={company.name}>
                        <img src={company.imgSrc} alt={company.name} />
                        <h3>{company.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Companies;
