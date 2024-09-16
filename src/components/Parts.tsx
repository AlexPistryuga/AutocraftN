// src/components/Parts.tsx
import React, { useState } from 'react';
import '../index.css'; // Путь к вашему CSS файлу
import Cart from './Cart'; // Импортируем компонент корзины

interface Part {
    imgSrc: string;
    title: string;
    price: string;
    reviews: number;
}

const parts: Part[] = [
    { imgSrc: "/img/parts/part1.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part2.jpeg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part3.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part4.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part5.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part6.png", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part7.jpg", title: "Auto Parts", price: "$26.99", reviews: 6 },
    { imgSrc: "/img/parts/part8.png", title: "Auto Parts", price: "$26.99", reviews: 6 }
];

const Parts: React.FC = () => {
    const [cartItems, setCartItems] = useState<Part[]>([]);
    const [cartVisible, setCartVisible] = useState<boolean>(false);

    const handleBuyNow = (part: Part) => {
        const cartItem: CartItem = {
            imgSrc: part.imgSrc,
            title: part.title,
            price: part.price
        };
        setCartItems(prevItems => [...prevItems, cartItem]);
    };


    const handleRemoveItem = (index: number) => {
        setCartItems(prevItems => prevItems.filter((_, i) => i !== index));
    };

    const toggleCartVisibility = () => {
        setCartVisible(prevVisible => !prevVisible);
    };

    return (
        <div>
            <section className="parts" id="parts">
                <div className="heading">
                    <span>What we offer?</span>
                    <h2>Our cars are always on the road</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, accusantium eius ex ipsam ipsum iusto, maiores modi molestiae</p>
                </div>
                <div className="parts-container container">
                    {parts.map(part => (
                        <div className="box" key={part.title}>
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
            <div className="cart-container">
                <i className='bx bx-cart' onClick={toggleCartVisibility}></i>
                {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                )}
                <div className={`cart-content ${cartVisible ? 'show' : ''}`}>
                    <Cart items={cartItems} onRemove={handleRemoveItem} />
                </div>
            </div>
        </div>
    );
};

export default Parts;
