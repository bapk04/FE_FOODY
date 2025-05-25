import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const FilterMenu = ({ onFilter, selectedCategory, onReset }) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`${API_BASE_URL}/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
                setError('Không thể tải danh mục');
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const handleFilter = (categoryId) => {
        onFilter(categoryId);
    };

    const handleShowAll = () => {
        onReset();
    };

    if (loading) {
        return (
            <div className="filter-menu loading">
                <p>Đang tải danh mục...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="filter-menu error">
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className="filter-menu">
            <h4 className="filter-title">Lọc theo danh mục:</h4>
            
            <div className="filter-buttons">
                <button 
                    className={`filter-btn ${!selectedCategory ? 'active' : ''}`}
                    onClick={handleShowAll}
                >
                    Tất cả ({categories.reduce((total, cat) => total + (cat.meal_count || 0), 0) || '?'})
                </button>
                
                {categories.map(category => (
                    <button 
                        key={category.id} 
                        className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                        onClick={() => handleFilter(category.id)}
                    >
                        {category.name}
                        {category.meal_count && (
                            <span className="category-count">
                                ({category.meal_count})
                            </span>
                        )}
                    </button>
                ))}
            </div>
            
            {selectedCategory && (
                <button className="reset-filter-btn" onClick={handleShowAll}>
                    ✕ Xóa bộ lọc
                </button>
            )}
        </div>
    );
};

export default FilterMenu;