// src/components/user-routes/SweetCard.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteSweet, restockSweet } from '../../services/sweet-service';
import { toast } from 'react-toastify';

const SweetCard = ({ sweet, onPurchase, isAdmin, onUpdate }) => {
    const [purchaseQty, setPurchaseQty] = useState(1);
    const [restockQty, setRestockQty] = useState(10);
    const [isDeleting, setIsDeleting] = useState(false);

    const handlePurchase = () => {
        if (purchaseQty > 0 && purchaseQty <= sweet.quantity) {
            onPurchase(sweet.id, purchaseQty);
        }
    };

    const handleRestock = async () => {
        try {
            await restockSweet(sweet.id, restockQty);
            toast.success('Restocked successfully!');
            onUpdate();
        } catch (error) {
            toast.error('Restock failed');
        }
    };

    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this sweet?')) {
            setIsDeleting(true);
            try {
                await deleteSweet(sweet.id);
                toast.success('Sweet deleted successfully!');
                onUpdate();
            } catch (error) {
                toast.error('Delete failed');
            } finally {
                setIsDeleting(false);
            }
        }
    };

    const getStockColor = (quantity) => {
        if (quantity === 0) return 'bg-red-100 text-red-800';
        if (quantity < 10) return 'bg-yellow-100 text-yellow-800';
        return 'bg-green-100 text-green-800';
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-800 truncate">{sweet.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStockColor(sweet.quantity)}`}>
                        {sweet.quantity} in stock
                    </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-3 capitalize">{sweet.category}</p>
                <p className="text-2xl font-bold text-purple-600 mb-4">${sweet.price.toFixed(2)}</p>

                {/* Purchase Section */}
                <div className="mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                        <input
                            type="number"
                            min="1"
                            max={sweet.quantity}
                            value={purchaseQty}
                            onChange={(e) => setPurchaseQty(parseInt(e.target.value) || 1)}
                            className="w-20 px-2 py-1 border border-gray-300 rounded text-sm"
                            disabled={sweet.quantity === 0}
                        />
                        <button
                            onClick={handlePurchase}
                            disabled={sweet.quantity === 0 || purchaseQty > sweet.quantity}
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-1 px-3 rounded hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm font-medium"
                        >
                            {sweet.quantity === 0 ? 'Out of Stock' : 'Purchase'}
                        </button>
                    </div>
                    {purchaseQty > sweet.quantity && sweet.quantity > 0 && (
                        <p className="text-red-500 text-xs">Not enough stock</p>
                    )}
                </div>

                {/* Admin Actions */}
                {isAdmin && (
                    <div className="space-y-2 border-t pt-4">
                        <div className="flex space-x-2">
                            <input
                                type="number"
                                min="1"
                                value={restockQty}
                                onChange={(e) => setRestockQty(parseInt(e.target.value) || 1)}
                                className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                            />
                            <button
                                onClick={handleRestock}
                                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600 transition text-sm font-medium"
                            >
                                Restock
                            </button>
                        </div>
                        <div className="flex space-x-2">
                            <Link
                                to={`/private/update-sweet/${sweet.id}`}
                                className="flex-1 bg-blue-500 text-white py-1 px-3 rounded hover:bg-blue-600 transition text-sm font-medium text-center"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={handleDelete}
                                disabled={isDeleting}
                                className="flex-1 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition disabled:opacity-50 text-sm font-medium"
                            >
                                {isDeleting ? 'Deleting...' : 'Delete'}
                            </button>
                        </div>
                    </div>
                )}

                {/* View Details */}
                <Link
                    to={`/private/sweet/${sweet.id}`}
                    className="block w-full text-center text-purple-600 hover:text-purple-700 font-medium text-sm mt-3"
                >
                    View Details →
                </Link>
            </div>
        </div>
    );
};

export default SweetCard;