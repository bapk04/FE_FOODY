// Favorites.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css'; // Import your CSS styles for Favorites
// Ensure you have a CSS file for styling the Favorites component

const Favorites = () => {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setFavorites(savedFavorites);
    }, []);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    };

    if (favorites.length === 0) {
        return (
            <div className="favorites-container">
                <h1>Món ăn yêu thích</h1>
                <p>Bạn chưa có món ăn yêu thích nào.</p>
                <Link to="/">Khám phá menu</Link>
            </div>
        );
    }

    return (
        <div className="favorites-container">
            <h1>Món ăn yêu thích ({favorites.length})</h1>
            <div className="meal-list">
                {favorites.map(meal => (
                    <div key={meal.id} className="meal-card-wrapper">
                        <Link to={`/meal/${meal.id}`} className="meal-card">
    <img
        src={meal.image_url || '/placeholder-image.jpg'}
        alt={meal.name}
        onError={(e) => (e.target.src = '/placeholder-image.jpg')}
        className="meal-image"
    />
    <div className="meal-info">
        <h3>{meal.name}</h3>
        <p>{meal.category}</p>
        <p>{meal.price?.toLocaleString('vi-VN')}₫</p>
    </div>
</Link>
                        <button className="remove-favorite" onClick={() => removeFavorite(meal.id)}>
                            Xóa
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;