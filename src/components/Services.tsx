import React from 'react';
import '../index.css'; // Используем файл стилей для компонента

const servicesList = [
    'Замена ремней ГРМ',
    'Замена подшипников ступиц',
    'Ремонт ходовой части',
    'Замена масел и фильтров',
    'Замена сальников клапанов',
    'Замена сцепления (корзина, диск, выжимной подшипник)',
    'Любой ремонт автомобилей',
];

const Services: React.FC = () => {
    return (
        <section className="services">
            <div className="services-heading">
                <h2>Our services</h2>
            </div>
            <div className="services-container">
                {servicesList.map((service, index) => (
                    <div key={index} className="services-item">
                        {service}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
