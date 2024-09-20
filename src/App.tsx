import React, { useState, useRef, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import Copyright from './components/Copyright';
import SearchMenu from './components/SearchMenu';
import Parts from './components/Parts';
import Companies from './components/Companies';
import Blog from './components/Blog';
import Cars from './components/Cars';
import Cart from './components/Cart';
import './index.css';
import '/src/assets/responsitive.css';
import Services from "./components/Services";

const App: React.FC = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [isCartVisible, setCartVisible] = useState(false); // Состояние для видимости корзины

    const addToCart = (item: any) => {
        setCart(prevCart => [...prevCart, { ...item, id: Date.now() }]);
        console.log("Item added to cart:", item);
    };

    const toggleCartVisibility = () => {
        setCartVisible(prev => !prev); // Переключаем видимость корзины
    };

    const removeFromCart = (itemId: number) => {
        setCart(prevCart => prevCart.filter(item => item.id !== itemId));
        console.log("Item removed from cart:", itemId);
    };

    const handleClickOutside = (event: MouseEvent) => {
        const cartElement = document.getElementById("cart");
        if (cartElement && !cartElement.contains(event.target as Node)) {
            setCartVisible(false);
        }
    };

    useEffect(() => {
        if (isCartVisible) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isCartVisible]);

    return (
        <Router>
            <div>
                <Header toggleCart={toggleCartVisibility} />
                <HomeSection />
                <Cars />
                <AboutSection />
                <Services />
                <Parts addToCart={addToCart} />
                {isCartVisible && <Cart id="cart" items={cart} isVisible={isCartVisible} removeFromCart={removeFromCart} />}
                <SearchMenu />
                <Companies />
                <Blog />
                <Footer />
                <Copyright />
            </div>
        </Router>
    );
};

export default App;
