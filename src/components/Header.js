import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();
    
    return (
        <header className="header">
            <div className="header-content">
                <Link to="/" className="logo">
                    🍽️ Food Menu
                </Link>
                
                <nav className="nav-links">
                    <Link 
                        to="/" 
                        className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    >
                        Trang chủ
                    </Link>
                    <Link 
                        to="/favorites" 
                        className={`nav-link ${location.pathname === '/favorites' ? 'active' : ''}`}
                    >
                        Yêu thích
                    </Link>
                    <Link 
                        to="/cart" 
                        className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`}
                    >
                        🛒 Giỏ hàng
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;