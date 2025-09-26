// src/components/More.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const More = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">More Information</h1>
                
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📚 Documentation</h2>
                        <p className="text-gray-600 mb-4">
                            Learn more about how to use Sweet Shop effectively with our comprehensive documentation.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• User Guide</li>
                            <li>• API Documentation</li>
                            <li>• Admin Manual</li>
                            <li>• FAQ Section</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🛠️ Features</h2>
                        <p className="text-gray-600 mb-4">
                            Explore all the powerful features available in Sweet Shop.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Inventory Management</li>
                            <li>• Advanced Search</li>
                            <li>• Purchase Tracking</li>
                            <li>• User Management</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">🔧 Technical</h2>
                        <p className="text-gray-600 mb-4">
                            Technical details and system information.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• System Requirements</li>
                            <li>• Browser Compatibility</li>
                            <li>• Mobile App</li>
                            <li>• Integration Guide</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">📞 Support</h2>
                        <p className="text-gray-600 mb-4">
                            Get help and support when you need it.
                        </p>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Contact Support</li>
                            <li>• Community Forum</li>
                            <li>• Video Tutorials</li>
                            <li>• Service Status</li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-12">
                    {!isAuthenticated ? (
                        <div className="space-x-4">
                            <Link 
                                to="/register" 
                                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium"
                            >
                                Get Started
                            </Link>
                            <Link 
                                to="/about" 
                                className="border border-purple-600 text-purple-600 px-8 py-3 rounded-lg hover:bg-purple-50 transition font-medium"
                            >
                                Learn More
                            </Link>
                        </div>
                    ) : (
                        <Link 
                            to="/private/sweets" 
                            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium"
                        >
                            Browse Sweets
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default More;