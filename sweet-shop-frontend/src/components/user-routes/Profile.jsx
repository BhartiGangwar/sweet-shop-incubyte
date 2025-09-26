// src/components/user-routes/Profile.jsx
import React from 'react';
import { useAuth } from '../../context/AuthContext';

const Profile = () => {
    const { user, isAdmin } = useAuth();

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Profile Header */}
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 text-center">
                    <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-3xl">👤</span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{user?.name}</h1>
                    <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-4 py-1 rounded-full">
                        <span className="text-sm font-medium">
                            {isAdmin ? 'Administrator' : 'User'}
                        </span>
                        {isAdmin && <span className="text-yellow-300">⭐</span>}
                    </div>
                </div>

                {/* Profile Details */}
                <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Account Type</h3>
                            <p className="text-gray-600">{isAdmin ? 'Administrator' : 'Standard User'}</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Member Since</h3>
                            <p className="text-gray-600">January 2024</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Total Purchases</h3>
                            <p className="text-gray-600">24 items</p>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-700 mb-2">Favorite Category</h3>
                            <p className="text-gray-600">Chocolate</p>
                        </div>
                    </div>

                    {/* Admin Features */}
                    {isAdmin && (
                        <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                            <h3 className="font-semibold text-purple-700 mb-3">Administrator Features</h3>
                            <ul className="text-purple-600 space-y-2">
                                <li>• Add, edit, and delete sweets</li>
                                <li>• Manage inventory levels</li>
                                <li>• View sales statistics</li>
                                <li>• User management access</li>
                            </ul>
                        </div>
                    )}

                    {/* Action Buttons */}
                    <div className="mt-8 flex space-x-4">
                        <button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition font-medium">
                            Edit Profile
                        </button>
                        <button className="flex-1 bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition font-medium">
                            Change Password
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;