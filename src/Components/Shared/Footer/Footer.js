import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    return (
        <div className="footerBg">
            <div className="container">
                <FooterCol />
            </div>
        </div>
    );
};

export default Footer;