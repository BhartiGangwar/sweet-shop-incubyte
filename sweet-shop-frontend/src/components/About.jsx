// src/components/About.jsx
import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Sweet Shop</h1>
                    
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6 text-lg">
                            Welcome to Sweet Shop, your ultimate destination for managing and exploring 
                            a wide variety of delicious sweets and candies. Our platform is designed to 
                            provide an exceptional experience for both sweet enthusiasts and business owners.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8 mb-8">
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-purple-700 mb-3">🎯 Our Mission</h3>
                                <p className="text-gray-700">
                                    To create a seamless platform where users can discover, purchase, 
                                    and manage sweets with ease, while providing powerful tools for 
                                    inventory management.
                                </p>
                            </div>
                            
                            <div className="bg-blue-50 p-6 rounded-lg">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3">🌟 Features</h3>
                                <ul className="text-gray-700 space-y-2">
                                    <li>• User-friendly sweet catalog</li>
                                    <li>• Advanced search and filtering</li>
                                    <li>• Secure purchase system</li>
                                    <li>• Admin management tools</li>
                                </ul>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Technology Stack</h2>
                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-2xl mb-2">⚛️</div>
                                    <div className="font-medium">React.js</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-2xl mb-2">🎨</div>
                                    <div className="font-medium">Tailwind CSS</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-2xl mb-2">🔐</div>
                                    <div className="font-medium">JWT Auth</div>
                                </div>
                                <div className="bg-white p-4 rounded shadow-sm">
                                    <div className="text-2xl mb-2">🚀</div>
                                    <div className="font-medium">Spring Boot</div>
                                </div>
                            </div>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Meet the Team</h2>
                        <p className="text-gray-600 mb-6">
                            Sweet Shop is developed by a passionate team of developers who love 
                            creating amazing user experiences. We believe in the power of technology 
                            to transform how people interact with their favorite sweets.
                        </p>
                        
                        <div className="text-center mt-8">
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-full">
                                <span>🍬</span>
                                <span className="font-semibold">Sweet Experiences, Happy Customers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;