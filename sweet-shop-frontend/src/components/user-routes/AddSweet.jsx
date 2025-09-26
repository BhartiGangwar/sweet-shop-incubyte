import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addSweet } from '../../services/sweet-service';
import { toast } from 'react-toastify';

const AddSweet = () => {
    const [sweetData, setSweetData] = useState({
        name: '',
        category: '',
        price: '',
        quantity: ''
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

   const categories = ['Chocolate',
  'Candy',
  'Gum',
  'Biscuit',
  'Cake',
  'Pastry',
  'Donut',
  'Brownie',
  'Pudding',
  'Ice Cream',
  'Cupcake',
  'Muffin',
  'Pie',
  'Other'
];


    const handleChange = (e) => {
        setSweetData({
            ...sweetData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            await addSweet({
                ...sweetData,
                price: parseFloat(sweetData.price),
                quantity: parseInt(sweetData.quantity)
            });
            toast.success('Sweet added successfully!');
            navigate('/private/sweets');
        } catch (error) {
            toast.error('Failed to add sweet');
            console.error('Add sweet error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Sweet</h1>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Sweet Name</label>
                        <input
                            type="text"
                            name="name"
                            required
                            value={sweetData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Enter sweet name"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                        <select
                            name="category"
                            required
                            value={sweetData.category}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                            <option value="">Select Category</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Price ($)</label>
                        <input
                            type="number"
                            step="0.01"
                            min="0"
                            name="price"
                            required
                            value={sweetData.price}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="0.00"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Initial Quantity</label>
                        <input
                            type="number"
                            min="0"
                            name="quantity"
                            required
                            value={sweetData.quantity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="0"
                        />
                    </div>

                    <div className="flex space-x-4">
                        <button
                            type="submit"
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition disabled:opacity-50 font-medium"
                        >
                            {loading ? 'Adding...' : 'Add Sweet'}
                        </button>
                        <button
                            type="button"
                            onClick={() => navigate('/private/sweets')}
                            className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition font-medium"
                        >
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddSweet;