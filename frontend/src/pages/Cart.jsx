import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, cartTotal } = useCart();

    if (cart.length === 0) {
        return (
            <div className="container mx-auto p-4 text-center">
                <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
                <Link to="/" className="text-blue-500 hover:underline">Go Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                    <thead>
                        <tr>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Product</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Price</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Quantity</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Total</th>
                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(item => (
                            <tr key={item.id}>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.name}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${item.price}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">{item.quantity}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">${(item.price * item.quantity).toFixed(2)}</td>
                                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-900">Remove</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4 flex justify-between items-center bg-gray-50">
                    <span className="text-xl font-bold">Total: ${cartTotal.toFixed(2)}</span>
                    <Link to="/checkout" className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Proceed to Checkout</Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
