// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
    const { isAuthenticated, isAdmin } = useAuth();

    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50">
            {/* Hero Section */}
            <section className="text-center py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-6xl font-bold text-gray-800 mb-6">
                        Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Sweet Store</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Discover the most delicious sweets and candies from around the world. 
                        Manage your inventory, track purchases, and satisfy your sweet tooth 
                        with our amazing collection of confectionery delights.
                    </p>
                    {!isAuthenticated ? (
                        <div className="space-x-4">
                            <Link 
                                to="/register" 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium text-lg"
                            >
                                Get Started Free
                            </Link>
                            <Link 
                                to="/about" 
                                className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg hover:bg-purple-50 transition font-medium text-lg"
                            >
                                Learn More
                            </Link>
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link 
                                to="/private/sweets" 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium text-lg"
                            >
                                Browse Sweets
                            </Link>
                            {isAdmin && (
                                <Link 
                                    to="/private/add-sweet" 
                                    className="bg-green-500 text-white px-8 py-4 rounded-lg hover:bg-green-600 transition font-medium text-lg"
                                >
                                    Add New Sweet
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-4">Why Choose Sweet Store?</h2>
                    <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                        Our platform offers everything you need to manage and enjoy sweets efficiently
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🍬</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Wide Variety</h3>
                            <p className="text-gray-600">Explore hundreds of sweet options from chocolates, candies, gums, and more</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">⚡</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Easy Management</h3>
                            <p className="text-gray-600">Simple inventory management, restocking, and purchase tracking system</p>
                        </div>
                        <div className="text-center p-8 bg-gradient-to-b from-white to-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
                            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <span className="text-3xl">🔒</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Secure & Reliable</h3>
                            <p className="text-gray-600">Protected with JWT authentication and secure REST APIs</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <div className="text-4xl font-bold mb-2">100+</div>
                            <div className="text-purple-200">Sweet Varieties</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-purple-200">Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">99.9%</div>
                            <div className="text-purple-200">Uptime</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">1K+</div>
                            <div className="text-purple-200">Happy Users</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;