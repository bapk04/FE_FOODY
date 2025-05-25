import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error to an error reporting service
        console.error('Error caught by boundary:', error, errorInfo);
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container">
                    <div className="error-boundary-content">
                        <h1 className="error-boundary-title">Oops! Có lỗi xảy ra</h1>
                        <p className="error-boundary-description">
                            Ứng dụng đã gặp lỗi không mong muốn. Vui lòng thử lại sau.
                        </p>
                        
                        <div className="error-boundary-actions">
                            <button 
                                onClick={() => window.location.reload()}
                                className="btn btn-primary"
                            >
                                🔄 Tải lại trang
                            </button>
                            <button 
                                onClick={() => window.location.href = '/'}
                                className="btn btn-secondary"
                            >
                                🏠 Về trang chủ
                            </button>
                        </div>

                        {process.env.NODE_ENV === 'development' && (
                            <details className="error-details">
                                <summary>Chi tiết lỗi (chỉ hiển thị trong môi trường phát triển)</summary>
                                <pre className="error-stack">
                                    {this.state.error && this.state.error.toString()}
                                    <br />
                                    {this.state.errorInfo.componentStack}
                                </pre>
                            </details>
                        )}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;