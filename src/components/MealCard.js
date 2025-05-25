import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = ({ meal }) => {
    const formatPrice = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const truncateText = (text, maxLength = 100) => {
        if (!text) return '';
        return text.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
    };

    return (
        <div className="meal-card-wrapper">
            <Link to={`/meal/${meal.id}`} className="meal-card">
                <div className="meal-card-image-container">
                    <img 
                        src={meal.image_url || '/placeholder-image.jpg'} 
                        alt={meal.name}
                        className="meal-card-image"
                        onError={(e) => {
                            e.target.src = '/placeholder-image.jpg';
                        }}
                        loading="lazy"
                    />
                    {meal.category && (
                        <span className="meal-category-badge">
                            {meal.category.name}
                        </span>
                    )}
                </div>
                
                <div className="meal-card-content">
                    <h3 className="meal-card-title">{meal.name}</h3>
                    
                    <p className="meal-card-description">
                        {truncateText(meal.description) || 'Chưa có mô tả'}
                    </p>
                    
                    <div className="meal-card-footer">
                        <span className="meal-card-price">
                            {formatPrice(meal.price)}
                        </span>
                        <span className="view-detail-text">
                            Xem chi tiết →
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default MealCard;