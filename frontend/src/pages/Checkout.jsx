import React, { useState } from 'react';
import api from '../api';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { cart, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ customer_name: '', customer_email: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const orderData = {
            ...formData,
            products: cart.map(item => ({ id: item.id, quantity: item.quantity }))
        };

        try {
            await api.post('/orders', orderData);
            clearCart();
            alert('Order placed successfully!');
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('Failed to place order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    if (cart.length === 0) return <div className="p-4">Your cart is empty.</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
                <div className="mb-4">
                    <h3 className="font-bold">Order Summary</h3>
                    <p>Total Items: {cart.length}</p>
                    <p className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</p>
                </div>
                {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.customer_name}
                            onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            required
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={formData.customer_email}
                            onChange={(e) => setFormData({ ...formData, customer_email: e.target.value })}
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-700'}`}
                    >
                        {loading ? 'Processing...' : 'Place Order'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
