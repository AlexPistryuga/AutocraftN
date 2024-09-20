import React from 'react';
import '../index.css';

interface Part {
    id: number;
    imgSrc: string;
    title: string;
    price: string;
    reviews: number;
}

const parts: Part[] = [
    { id: 1, imgSrc: "/img/parts/part1.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 2, imgSrc: "/img/parts/part2.jpeg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 3, imgSrc: "/img/parts/part3.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 4, imgSrc: "/img/parts/part4.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 5, imgSrc: "/img/parts/part5.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 6, imgSrc: "/img/parts/part6.png", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 7, imgSrc: "/img/parts/part7.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { id: 8, imgSrc: "/img/parts/part8.png", title: "Auto Parts", price: "$26.99", reviews: 6 }
];

interface PartsProps {
    addToCart: (item: any) => void; // Функция добавления в корзину
}

const Parts: React.FC<PartsProps> = ({ addToCart }) => {
    const handleBuyNow = (part: Part) => {
        const cartItem = {
            id: part.id,
            imgSrc: part.imgSrc,
            title: part.title,
            price: part.price
        };
        addToCart(cartItem);
        console.log("Item added to cart:", cartItem); // Для отладки
    };

    return (
        <section className="parts" id="parts">
            <div className="heading">
                <span>What we offer?</span>
                <h2>Our cars are always on the road</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium eius ex ipsam ipsum iusto, maiores modi molestiae</p>
            </div>
            <div className="parts-container container">
                {parts.map(part => (
                    <div className="box" key={part.id}>
                        <img src={part.imgSrc} alt={part.title} />
                        <h2>{part.title}</h2>
                        <span>{part.price}</span>
                        <i className='bx bx-star'>({part.reviews} Reviews)</i>
                        <button className="btn" onClick={() => handleBuyNow(part)}>Buy Now</button>
                        <a href="#" className="details">View details</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Parts;
