// src/components/Cart.tsx
import React from 'react';
import '../index.css'; // Импортируем CSS файл

interface CartItem {
    imgSrc: string;
    title: string;
    price: string;
}

interface CartProps {
    items: CartItem[];
    onRemove: (index: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, onRemove }) => {
    const cartItems = items || [];

    return (
        <div className="cart-content">
            {cartItems.length === 0 ? null : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            <img src={item.imgSrc} alt={item.title} />
                            <div>
                                <h3>{item.title}</h3>
                                <span>{item.price}</span>
                                <button onClick={() => onRemove(index)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
