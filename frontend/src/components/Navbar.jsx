import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-xl font-bold">E-Shop</Link>
                <div className="flex gap-4">
                    <Link to="/" className="hover:text-gray-300">Products</Link>
                    <Link to="/cart" className="hover:text-gray-300 relative">
                        Cart
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
