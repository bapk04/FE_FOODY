import React, { useEffect, useState, useMemo } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import MealCard from '../components/MealCard';
import SearchBar from '../components/SearchBar';
import FilterMenu from '../components/FilterMenu';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';

const Home = () => {
    const [meals, setMeals] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // 🔥 Chặn Chrome nếu domain là https://hoxuanhung2802.id.vn
    useEffect(() => {
    const isDomainMatch = window.location.hostname === 'hoxuanhung2802.id.vn';

    let isChrome = false;

    if (navigator.userAgentData?.brands) {
        // Lấy danh sách brands từ sec-ch-ua
        const brands = navigator.userAgentData.brands.map(b => b.brand.toLowerCase());

        isChrome = brands.includes('google chrome') || brands.includes('chromium');

        // Loại bỏ các trình duyệt chromium-based khác
        if (brands.includes('microsoft edge') || brands.includes('brave') || brands.includes('opera') || brands.includes('vivaldi')) {
            isChrome = false;
        }
    } else {
        // Fallback: kiểm tra userAgent
        const ua = navigator.userAgent.toLowerCase();
        isChrome = ua.includes('chrome') && !ua.includes('edg') && !ua.includes('opr') && !ua.includes('brave') && !ua.includes('vivaldi');
    }

    if (isDomainMatch && isChrome) {
        alert('Truy cập bằng Chrome không được phép!');
        window.location.href = 'https://example.com';
    }
}, []);



    useEffect(() => {
        const fetchMeals = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.get(`${API_BASE_URL}/meals`);
                setMeals(response.data);
            } catch (error) {
                console.error('Error fetching meals:', error);
                setError('Không thể tải danh sách món ăn. Vui lòng thử lại sau.');
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, []);

    const filteredMeals = useMemo(() => {
        return meals.filter(meal => {
            const matchesSearch = meal.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = !selectedCategory || meal.category_id === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [meals, searchQuery, selectedCategory]);

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleFilter = (categoryId) => {
        setSelectedCategory(categoryId);
    };

    const handleResetFilter = () => {
        setSelectedCategory(null);
        setSearchQuery('');
    };

    if (loading) {
        return (
            <motion.div 
                className="loading-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, yoyo: Infinity }}
            >
                <p>Đang tải danh sách món ăn...</p>
            </motion.div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p className="error-message">{error}</p>
                <button onClick={() => window.location.reload()}>
                    Thử lại
                </button>
            </div>
        );
    }

    return (
        <div className="home-container">
            <div className="search-filter-container">
                <SearchBar onSearch={handleSearch} searchQuery={searchQuery} />
                <FilterMenu 
                    onFilter={handleFilter} 
                    selectedCategory={selectedCategory}
                    onReset={handleResetFilter}
                />
            </div>
            
            <div className="results-info">
                <p>Tìm thấy {filteredMeals.length} món ăn</p>
                {(searchQuery || selectedCategory) && (
                    <button className="clear-filters-btn" onClick={handleResetFilter}>
                        Xóa bộ lọc
                    </button>
                )}
            </div>

            <div className="meal-list">
                {filteredMeals.length > 0 ? (
                    filteredMeals.map(meal => (
                        <MealCard key={meal.id} meal={meal} />
                    ))
                ) : (
                    <div className="no-results">
                        <p>Không tìm thấy món ăn nào phù hợp</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
