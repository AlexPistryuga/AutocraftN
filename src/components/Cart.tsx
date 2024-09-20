import React from 'react';
import '../index.css';

interface CartProps {
    items: any[];
    isVisible: boolean;
    removeFromCart: (itemId: number) => void;
}

const Cart: React.FC<CartProps> = ({ items, isVisible, removeFromCart }) => {
    return (
        <div id="cart" className={`cart ${isVisible ? 'visible' : ''}`}>
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <ul>
                        {items.map((item) => (
                            <li key={item.id}>
                                <img src={item.imgSrc} alt={item.title} />
                                <h3>{item.title}</h3>
                                <span>{item.price}</span>
                                <i
                                    className='bx bx-layer-minus icon-large'
                                    onClick={() => removeFromCart(item.id)}
                                    style={{ cursor: 'pointer' }}
                                ></i>
                            </li>
                        ))}
                    </ul>
                    <button className="checkout-button">Checkout</button> {/* Кнопка Checkout */}
                </>
            )}
        </div>
    );
};

export default Cart;
