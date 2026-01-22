import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import { useCart } from '../context/CartContext';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        api.get('/products')
            .then(res => {
                setProducts(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div className="text-center mt-10">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {products.map(product => (
                    <div key={product.id} className="border p-4 rounded shadow">
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                        <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">View Details</Link>
                        <button
                            onClick={() => addToCart(product)}
                            className="block mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
