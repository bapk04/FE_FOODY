import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const MealDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [isAddingToCart, setIsAddingToCart] = useState(false);

    useEffect(() => {
        const fetchMealDetail = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`${API_BASE_URL}/meals/${id}`);
                setMeal(response.data);
                
                // Kiểm tra xem món ăn có trong danh sách yêu thích không
                checkIfFavorite(id);
            } catch (error) {
                console.error('Error fetching meal detail:', error);
                if (error.response?.status === 404) {
                    setError('Không tìm thấy món ăn này.');
                } else {
                    setError('Không thể tải thông tin món ăn. Vui lòng thử lại sau.');
                }
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchMealDetail();
        }
    }, [id]);

    // Kiểm tra món ăn có trong danh sách yêu thích không
    const checkIfFavorite = (mealId) => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some(fav => fav.id === parseInt(mealId)));
    };

    // Thêm/bỏ yêu thích
    const toggleFavorite = () => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        
        if (isFavorite) {
            // Bỏ khỏi danh sách yêu thích
            const updatedFavorites = favorites.filter(fav => fav.id !== meal.id);
            localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
            setIsFavorite(false);
            alert('Đã bỏ khỏi danh sách yêu thích!');
        } else {
            // Thêm vào danh sách yêu thích
            const favoriteItem = {
                id: meal.id,
                name: meal.name,
                price: meal.price,
                image_url: meal.image_url,
                category: meal.category
            };
            favorites.push(favoriteItem);
            localStorage.setItem('favorites', JSON.stringify(favorites));
            setIsFavorite(true);
            alert('Đã thêm vào danh sách yêu thích!');
        }
    };

    // Thêm vào giỏ hàng
    const addToCart = () => {
        setIsAddingToCart(true);
        
        const cart = JSON.parse(localStorage.getItem('cart') || '[]');
        const existingItemIndex = cart.findIndex(item => item.id === meal.id);
        
        if (existingItemIndex !== -1) {
            // Nếu món ăn đã có trong giỏ hàng, tăng số lượng
            cart[existingItemIndex].quantity += quantity;
        } else {
            // Nếu chưa có, thêm mới
            const cartItem = {
                id: meal.id,
                name: meal.name,
                price: meal.price,
                image_url: meal.image_url,
                quantity: quantity
            };
            cart.push(cartItem);
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        
        setTimeout(() => {
            setIsAddingToCart(false);
            alert(`Đã thêm ${quantity} ${meal.name} vào giỏ hàng!`);
        }, 500);
    };

    const handleBackClick = () => {
        navigate(-1);
    };

    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const handleQuantityChange = (change) => {
        const newQuantity = quantity + change;
        if (newQuantity >= 1) {
            setQuantity(newQuantity);
        }
    };

    if (loading) {
        return (
            <div className="loading-container">
                <p>Đang tải thông tin món ăn...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
                <div className="error-actions">
                    <button onClick={() => window.location.reload()}>
                        Thử lại
                    </button>
                    <button onClick={handleBackClick}>
                        Quay lại
                    </button>
                </div>
            </div>
        );
    }

    if (!meal) {
        return (
            <div className="error-container">
                <p>Không tìm thấy món ăn.</p>
                <button onClick={handleBackClick}>
                    Quay lại
                </button>
            </div>
        );
    }

    return (
        <div className="meal-detail-container">
            <button className="back-button" onClick={handleBackClick}>
                ← Quay lại
            </button>
            
            <div className="meal-detail">
                <div className="meal-image-container">
                    <img 
                        src={meal.image_url || '/placeholder-image.jpg'} 
                        alt={meal.name}
                        onError={(e) => {
                            e.target.src = '/placeholder-image.jpg';
                        }}
                    />
                </div>
                
                <div className="meal-info">
                    <h1 className="meal-title">{meal.name}</h1>
                    
                    {meal.category && (
                        <span className="meal-category">
                            Danh mục: {meal.category.name}
                        </span>
                    )}
                    
                    <div className="meal-description">
                        <h3>Mô tả:</h3>
                        <p>{meal.description || 'Chưa có mô tả cho món ăn này.'}</p>
                    </div>
                    
                    <div className="meal-price">
                        <span className="price-label">Giá:</span>
                        <span className="price-value">{formatPrice(meal.price)}</span>
                    </div>
                    
                    <div className="quantity-selector">
                        <span className="quantity-label">Số lượng:</span>
                        <div className="quantity-controls">
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(-1)}
                                disabled={quantity <= 1}
                            >
                                -
                            </button>
                            <span className="quantity-value">{quantity}</span>
                            <button 
                                className="quantity-btn"
                                onClick={() => handleQuantityChange(1)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                    
                    <div className="meal-actions">
                        <button 
                            className="add-to-cart-button"
                            onClick={addToCart}
                            disabled={isAddingToCart}
                        >
                            {isAddingToCart ? 'Đang thêm...' : '🛒 Thêm vào giỏ hàng'}
                        </button>
                        <button 
                            className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`}
                            onClick={toggleFavorite}
                        >
                            {isFavorite ? '❤️ Đã yêu thích' : '♡ Yêu thích'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MealDetail;