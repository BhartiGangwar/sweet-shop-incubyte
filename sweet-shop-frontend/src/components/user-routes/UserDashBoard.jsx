// src/components/user-routes/UserDashboard.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { getAllSweets } from '../../services/sweet-service';
import { toast } from 'react-toastify';

const UserDashboard = () => {
    const [sweets, setSweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalSweets: 0,
        lowStock: 0,
        outOfStock: 0
    });
    
    const { user, isAdmin } = useAuth();

  

    useEffect(() => {
        loadDashboardData();
    }, []);

    const loadDashboardData = async () => {
        try {
            const data = await getAllSweets();
            setSweets(data);
            
            // Calculate stats
            const totalSweets = data.length;
            const lowStock = data.filter(sweet => sweet.quantity > 0 && sweet.quantity < 10).length;
            const outOfStock = data.filter(sweet => sweet.quantity === 0).length;
            
            setStats({ totalSweets, lowStock, outOfStock });
        } catch (error) {
            toast.error('Failed to load dashboard data');
            console.error('Dashboard error:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-2xl p-8 mb-8">
                <h1 className="text-4xl font-bold mb-2">Welcome back, {user?.name}! 👋</h1>
                <h2>{isAdmin}</h2>
                <p className="text-purple-200 text-lg">
                    {isAdmin ? 'Admin Dashboard - Manage your sweet inventory' : 'Explore our delicious sweet collection'}
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center">
                        <div className="bg-green-100 p-3 rounded-lg mr-4">
                            <span className="text-2xl">🍬</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{stats.totalSweets}</h3>
                            <p className="text-gray-600">Total Sweets</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center">
                        <div className="bg-yellow-100 p-3 rounded-lg mr-4">
                            <span className="text-2xl">⚠️</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{stats.lowStock}</h3>
                            <p className="text-gray-600">Low Stock</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center">
                        <div className="bg-red-100 p-3 rounded-lg mr-4">
                            <span className="text-2xl">❌</span>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-800">{stats.outOfStock}</h3>
                            <p className="text-gray-600">Out of Stock</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Link 
                    to="/private/sweets" 
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition group"
                >
                    <div className="text-center">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                            <span className="text-2xl">📦</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">Browse Sweets</h3>
                        <p className="text-gray-600 text-sm">View all available sweets</p>
                    </div>
                </Link>

                {isAdmin && (
                    <Link 
                        to="/private/add-sweet" 
                        className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition group"
                    >
                        <div className="text-center">
                            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                                <span className="text-2xl">➕</span>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-2">Add Sweet</h3>
                            <p className="text-gray-600 text-sm">Add new sweet to inventory</p>
                        </div>
                    </Link>
                )}

                <Link 
                    to="/private/profile" 
                    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition group"
                >
                    <div className="text-center">
                        <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                            <span className="text-2xl">👤</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">Profile</h3>
                        <p className="text-gray-600 text-sm">Manage your account</p>
                    </div>
                </Link>

                <div className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="text-center">
                        <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-2xl">📊</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 mb-2">Statistics</h3>
                        <p className="text-gray-600 text-sm">View sales analytics</p>
                    </div>
                </div>
            </div>

            {/* Recent Sweets Preview */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Recent Sweets</h2>
                    <Link to="/private/sweets" className="text-purple-600 hover:text-purple-700 font-medium">
                        View All →
                    </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sweets.slice(0, 3).map(sweet => (
                        <div key={sweet.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                            <h4 className="font-semibold text-gray-800 truncate">{sweet.name}</h4>
                            <p className="text-gray-600 text-sm capitalize">{sweet.category}</p>
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-purple-600 font-bold">${sweet.price.toFixed(2)}</span>
                                <span className={`text-xs px-2 py-1 rounded-full ${
                                    sweet.quantity === 0 ? 'bg-red-100 text-red-800' :
                                    sweet.quantity < 10 ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }`}>
                                    {sweet.quantity} in stock
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;