import React from 'react';
import '../index.css'; // Путь к вашему CSS файлу

interface Car {
    imgSrc: string;
    title: string;
}

const cars: Car[] = [
    { imgSrc: '/img/cars/Audi.png', title: 'Audi' },
    { imgSrc: '/img/cars/Peugeot.png', title: 'Peugeot' },
    { imgSrc: '/img/cars/Hyundai.png', title: 'Hyundai' },
    { imgSrc: '/img/cars/Suzuki.png', title: 'Suzuki' },
    { imgSrc: '/img/cars/Volkswagen.png', title: 'VW' },
    { imgSrc: '/img/cars/Mercedes.png', title: 'Mercedes' },
    { imgSrc: '/img/cars/Opel.png', title: 'Opel' }
];

const Cars: React.FC = () => {
    return (
        <section className="cars" id="cars">
            <div className="heading">
                <span>All cars</span>
                <h2>We repair all types of cars</h2>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="cars-container container">
                {cars.map(car => (
                    <div className="box" key={car.title}>
                        <img src={car.imgSrc} alt={car.title} />
                        <h3>{car.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cars;
