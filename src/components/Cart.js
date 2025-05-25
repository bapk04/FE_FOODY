import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [showCheckout, setShowCheckout] = useState(false);
    const [history, setHistory] = useState([]);
    const [form, setForm] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        method: 'bank',
    });

    const [message, setMessage] = useState('');

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        const savedHistory = JSON.parse(localStorage.getItem('orderHistory') || '[]');
        setCart(savedCart);
        setHistory(savedHistory);
    }, []);

    const updateCart = (updatedCart) => {
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    const handleQuantityChange = (id, change) => {
        const updatedCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(item.quantity + change, 1) };
            }
            return item;
        });
        updateCart(updatedCart);
    };

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);
        updateCart(updatedCart);
    };

    const getTotal = () => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        if (!form.name || !form.address || !form.phone || !form.email) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return;
        }

        const newOrder = {
            id: Date.now(),
            items: cart,
            total: getTotal(),
            info: { ...form },
            status: form.method === 'cod' ? 'Đang chờ vận chuyển' : 'Đã thanh toán thành công',
            createdAt: new Date().toLocaleString(),
        };

        const updatedHistory = [newOrder, ...history];
        setHistory(updatedHistory);
        localStorage.setItem('orderHistory', JSON.stringify(updatedHistory));
        localStorage.removeItem('cart');
        setCart([]);
        setShowCheckout(false);
        setMessage(
            form.method === 'cod'
                ? 'Đơn hàng đang chờ vận chuyển (COD).'
                : 'Bạn đã đặt hàng và thanh toán thành công (Ngân hàng).'
        );
    };

    return (
        <div className="cart-page">
            <div className="order-history">
                <h3>Lịch sử đặt hàng</h3>
                {history.length === 0 ? (
                    <p>Chưa có đơn hàng nào.</p>
                ) : (
                    <ul>
                        {history.map(order => (
                            <li key={order.id}>
                                <strong>{order.createdAt}</strong><br />
                                Tổng: {order.total.toLocaleString('vi-VN')}₫<br />
                                Trạng thái: {order.status}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="cart-container">
                <h1>Giỏ hàng</h1>
                {cart.length === 0 ? (
                    <p>Giỏ hàng của bạn đang trống.</p>
                ) : (
                    <>
                        <div className="cart-list">
                            {cart.map(item => (
                                <div key={item.id} className="cart-item">
                                    <img
                                        src={item.image_url || '/placeholder-image.jpg'}
                                        alt={item.name}
                                        onError={(e) => (e.target.src = '/placeholder-image.jpg')}
                                    />
                                    <div className="item-info">
                                        <h3>{item.name}</h3>
                                        <p>Giá: {item.price.toLocaleString('vi-VN')}₫</p>
                                        <div className="quantity-controls">
                                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                            <span>{item.quantity}</span>
                                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                        </div>
                                        <button className="remove-btn" onClick={() => removeItem(item.id)}>🗑 Xóa</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="cart-summary">
                            <h2>Tổng cộng: {getTotal().toLocaleString('vi-VN')}₫</h2>
                            <button className="checkout-btn" onClick={() => setShowCheckout(true)}>
                                Thanh toán
                            </button>
                        </div>
                    </>
                )}

                {message && <p className="success-message">{message}</p>}

                {showCheckout && (
                    <div className="popup">
                        <div className="popup-content">
                            <h2>Thông tin thanh toán</h2>
                            <input name="name" placeholder="Họ tên" value={form.name} onChange={handleInputChange} />
                            <input name="address" placeholder="Địa chỉ" value={form.address} onChange={handleInputChange} />
                            <input name="phone" placeholder="Số điện thoại" value={form.phone} onChange={handleInputChange} />
                            <input name="email" placeholder="Email" value={form.email} onChange={handleInputChange} />

                            <div className="payment-method">
                                <label>
                                    <input
                                        type="radio"
                                        name="method"
                                        value="bank"
                                        checked={form.method === 'bank'}
                                        onChange={handleInputChange}
                                    />
                                    Thanh toán ngân hàng
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="method"
                                        value="cod"
                                        checked={form.method === 'cod'}
                                        onChange={handleInputChange}
                                    />
                                    Thanh toán COD
                                </label>
                            </div>

                            <div className="popup-actions">
                                <button onClick={handleCheckout}>Xác nhận thanh toán</button>
                                <button onClick={() => setShowCheckout(false)}>Hủy</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
