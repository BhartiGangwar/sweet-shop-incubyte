// src/components/user-routes/SweetDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getSweetById, purchaseSweet, restockSweet, deleteSweet } from '../../services/sweet-service';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const SweetDetails = () => {
    const { sweetId } = useParams();
    const navigate = useNavigate();
    const [sweet, setSweet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [purchaseQty, setPurchaseQty] = useState(1);
    const [restockQty, setRestockQty] = useState(10);
    const { isAdmin } = useAuth();

    useEffect(() => {
        loadSweetDetails();
    }, [sweetId]);

    const loadSweetDetails = async () => {
        try {
            const data = await getSweetById(sweetId);
            setSweet(data);
        } catch (error) {
            toast.error('Failed to load sweet details');
            console.error('Error loading sweet:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async () => {
        try {
            await purchaseSweet(sweetId, purchaseQty);
            toast.success('Purchase successful!');
            loadSweetDetails(); // Refresh data
        } catch (error) {
            toast.error('Purchase failed');
        }
    };

    const handleRestock = async () => {
        try {
            await restockSweet(sweetId, restockQty);
            toast.success('Restocked successfully!');
            loadSweetDetails(); // Refresh data
        } catch (error) {
            toast.error('Restock failed');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this sweet?')) {
            try {
                await deleteSweet(sweetId);
                toast.success('Sweet deleted successfully!');
                navigate('/private/sweets');
            } catch (error) {
                toast.error('Delete failed');
            }
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    if (!sweet) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">😞</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Sweet Not Found</h2>
                    <p className="text-gray-600 mb-4">The sweet you're looking for doesn't exist.</p>
                    <Link to="/private/sweets" className="text-purple-600 hover:text-purple-700 font-medium">
                        ← Back to Sweets
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <Link to="/private/sweets" className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-6">
                ← Back to Sweets
            </Link>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="md:flex">
                    {/* Sweet Image/Icon Section */}
                    <div className="md:w-1/3 bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8">
                        <div className="text-8xl">
                            {sweet.category === 'Chocolate' && '🍫'}
                            {sweet.category === 'Candy' && '🍭'}
                            {sweet.category === 'Gum' && '🍬'}
                            {sweet.category === 'Biscuit' && '🍪'}
                            {sweet.category === 'Cake' && '🎂'}
                            {!['Chocolate', 'Candy', 'Gum', 'Biscuit', 'Cake'].includes(sweet.category) && '🍬'}
                        </div>
                    </div>

                    {/* Sweet Details Section */}
                    <div className="md:w-2/3 p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800 mb-2">{sweet.name}</h1>
                                <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium capitalize">
                                    {sweet.category}
                                </span>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                sweet.quantity === 0 ? 'bg-red-100 text-red-800' :
                                sweet.quantity < 10 ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                            }`}>
                                {sweet.quantity} in stock
                            </span>
                        </div>

                        <p className="text-4xl font-bold text-purple-600 mb-6">${sweet.price.toFixed(2)}</p>

                        {/* Purchase Section */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Quantity</label>
                            <div className="flex items-center space-x-4">
                                <input
                                    type="number"
                                    min="1"
                                    max={sweet.quantity}
                                    value={purchaseQty}
                                    onChange={(e) => setPurchaseQty(parseInt(e.target.value) || 1)}
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
                                    disabled={sweet.quantity === 0}
                                />
                                <button
                                    onClick={handlePurchase}
                                    disabled={sweet.quantity === 0 || purchaseQty > sweet.quantity}
                                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                                >
                                    {sweet.quantity === 0 ? 'Out of Stock' : `Purchase ${purchaseQty} item(s)`}
                                </button>
                            </div>
                            {purchaseQty > sweet.quantity && sweet.quantity > 0 && (
                                <p className="text-red-500 text-sm mt-2">Not enough stock available</p>
                            )}
                        </div>

                        {/* Admin Actions */}
                        {isAdmin && (
                            <div className="border-t pt-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4">Admin Actions</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">Restock Quantity</label>
                                        <div className="flex space-x-2">
                                            <input
                                                type="number"
                                                min="1"
                                                value={restockQty}
                                                onChange={(e) => setRestockQty(parseInt(e.target.value) || 1)}
                                                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                                            />
                                            <button
                                                onClick={handleRestock}
                                                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition font-medium"
                                            >
                                                Restock
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <div className="flex space-x-2">
                                        <Link
                                            to={`/private/update-sweet/${sweet.id}`}
                                            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition font-medium text-center"
                                        >
                                            Edit Sweet
                                        </Link>
                                        <button
                                            onClick={handleDelete}
                                            className="flex-1 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition font-medium"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Sweet Description */}
                        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                            <h4 className="font-semibold text-gray-800 mb-2">Product Details</h4>
                            <p className="text-gray-600">
                                Delicious {sweet.name.toLowerCase()} from our premium {sweet.category.toLowerCase()} collection. 
                                Perfect for satisfying your sweet cravings with high-quality ingredients.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SweetDetails;