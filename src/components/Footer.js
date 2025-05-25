import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} Food Menu App. All rights reserved.</p>
                <p>Made with ❤️ by HUNG & KIET</p>
            </div>
        </footer>
    );
};

export default Footer;