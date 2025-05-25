import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import MealDetail from './pages/MealDetail';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Cart from './components/Cart';

const App = () => {
    return (
        <div className="app">
            <Header />
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites  />} />
                    <Route path="/cart" element={<Cart  />} />
                    <Route path="/meal/:id" element={<MealDetail />} />
                    <Route path="/404" element={<NotFound />} />
                    {/* Redirect any unknown routes to 404 */}
                    <Route path="*" element={<Navigate to="/404" replace />} />
                </Routes>
            </main>
            
            <Footer />
        </div>
    );
};

export default App;