import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="not-found-title">404</h1>
                <h2 className="not-found-subtitle">Trang không tìm thấy</h2>
                <p className="not-found-description">
                    Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.
                </p>
                <div className="not-found-actions">
                    <Link to="/" className="btn btn-primary">
                        🏠 Về trang chủ
                    </Link>
                    <button 
                        onClick={() => window.history.back()} 
                        className="btn btn-secondary"
                    >
                        ← Quay lại
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;