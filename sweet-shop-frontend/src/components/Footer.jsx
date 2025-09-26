// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">🍬 Sweet Shop</h3>
                        <p className="text-purple-200">
                            Your one-stop destination for delicious sweets and candies. 
                            Manage your inventory and satisfy your sweet cravings.
                        </p>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-purple-200 hover:text-white transition">Home</a></li>
                            <li><a href="/about" className="text-purple-200 hover:text-white transition">About</a></li>
                            <li><a href="/private/sweets" className="text-purple-200 hover:text-white transition">Sweets</a></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-purple-200">
                            <li>📧 info@sweetshop.com</li>
                            <li>📞 +1 (555) 123-4567</li>
                            <li>📍 123 Sweet Street, Candyland</li>
                        </ul>
                    </div>
                </div>
                
                <div className="border-t border-purple-500 mt-8 pt-6 text-center">
                    <p className="text-purple-200">
                        &copy; 2024 Sweet Shop. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;