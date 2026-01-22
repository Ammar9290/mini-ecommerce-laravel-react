import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        api.get(`/products/${id}`)
            .then(res => {
                setProduct(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <div className="text-center mt-10">Loading...</div>;
    if (!product) return <div className="text-center mt-10">Product not found</div>;

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-2xl mx-auto border p-6 rounded shadow">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex justify-between items-center mb-6">
                    <span className="text-2xl font-bold text-green-600">${product.price}</span>
                    <span className="text-gray-500">Stock: {product.stock}</span>
                </div>
                <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-500 text-white px-6 py-3 rounded text-lg hover:bg-blue-600"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;
