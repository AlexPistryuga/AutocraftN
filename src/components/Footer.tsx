import React from 'react';
import '../index.css'; // Путь к вашему CSS файлу

const Footer: React.FC = () => (
    <section className="footer">
        <div className="footer-container container">
            <div className="footer-box">
                <a href="#" className="logo">Auto<span>Craft</span></a>
                <div className="social">
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-instagram'></i></a>
                    <a href="#"><i className='bx bxl-youtube'></i></a>
                </div>
            </div>
            <div className="footer-box">
                <h3>Page</h3>
                <a href="#">Home</a>
                <a href="#">Cars</a>
                <a href="#">Parts</a>
                <a href="#">Sales</a>
            </div>
            <div className="footer-box">
                <h3>Legal</h3>
                <a href="#">Privacy</a>
                <a href="#">Refund Policy</a>
                <a href="#">Cookies Policy</a>
            </div>
            <div className="footer-box">
                <h3>Contact</h3>
                <p>Chisinau</p>
                <p>Balti</p>
                <p>Briceni</p>
            </div>
        </div>
    </section>
);

export default Footer;
