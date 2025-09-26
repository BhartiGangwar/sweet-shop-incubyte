// src/components/Header.jsx
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { doLogout } from '../auth';

const Header = () => {
    const { isAuthenticated, user, isAdmin, logoutContext } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        doLogout();
        logoutContext();
        navigate('/');
    };

    return (
        <nav className="bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
            <div className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link to="/" className="text-2xl font-bold flex items-center">
                        🍬 Sweet Store
                    </Link>
                    
                    <div className="flex items-center space-x-6">
                        <Link to="/" className="hover:text-purple-200 transition font-medium">Home</Link>
                        <Link to="/about" className="hover:text-purple-200 transition font-medium">About</Link>
                        
                        {isAuthenticated ? (
                            <>
                                <Link to="/private/sweets" className="hover:text-purple-200 transition font-medium">Sweets</Link>
                                <Link to="/private/dashboard" className="hover:text-purple-200 transition font-medium">Dashboard</Link>
                                
                                {isAdmin && (
                                    <Link to="/private/add-sweet" className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition font-medium">
                                        Add Sweet
                                    </Link>
                                )}
                                
                                <div className="flex items-center space-x-4">
                                    <span className="text-purple-200">Welcome, {user?.name}</span>
                                    {isAdmin && (
                                        <span className="bg-yellow-500 text-yellow-900 px-2 py-1 rounded text-xs font-bold">ADMIN</span>
                                    )}
                                    <button 
                                        onClick={handleLogout}
                                        className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition font-medium"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </>
                        ) : (
                           <div className="flex items-center space-x-6">
     
     
    <Link to="/login" className="hover:text-purple-200 transition font-medium py-2">Login</Link>
    <Link to="/register" className="bg-white text-purple-600 hover:bg-gray-100 px-4 py-2 rounded-lg transition font-medium">
        Register
    </Link>
</div>

                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;