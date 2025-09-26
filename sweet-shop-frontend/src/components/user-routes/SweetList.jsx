// src/components/user-routes/SweetList.jsx
import React, { useState, useEffect } from 'react';
import { getAllSweets, searchSweets, purchaseSweet } from '../../services/sweet-service';
import { useAuth } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import SweetCard from './SweetCard';
import SearchAndFilter from './SearchAndFilter';

const SweetList = () => {
    const [sweets, setSweets] = useState([]);
    const [filteredSweets, setFilteredSweets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchFilters, setSearchFilters] = useState({});
    const { isAdmin } = useAuth();

    useEffect(() => {
        loadSweets();
    }, []);

    useEffect(() => {
        if (Object.keys(searchFilters).length > 0) {
            handleSearch(searchFilters);
        } else {
            setFilteredSweets(sweets);
        }
    }, [searchFilters, sweets]);

    const loadSweets = async () => {
        try {
            const data = await getAllSweets();
            setSweets(data);
            setFilteredSweets(data);
        } catch (error) {
            toast.error('Failed to load sweets');
            console.error('Error loading sweets:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (filters) => {
        try {
            setLoading(true);
            const data = await searchSweets(filters);
            setFilteredSweets(data);
        } catch (error) {
            toast.error('Search failed');
            console.error('Search error:', error);
        } finally {
            setLoading(false);
        }
    };

    const handlePurchase = async (sweetId, quantity) => {
        try {
            await purchaseSweet(sweetId, quantity);
            toast.success('Purchase successful!');
            loadSweets(); // Reload to update quantities
        } catch (error) {
            toast.error('Purchase failed');
            console.error('Purchase error:', error);
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
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Sweet Collection</h1>
                <p className="text-gray-600">Discover and manage delicious sweets</p>
            </div>

            <SearchAndFilter onSearch={setSearchFilters} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredSweets.map(sweet => (
                    <SweetCard 
                        key={sweet.id} 
                        sweet={sweet} 
                        onPurchase={handlePurchase}
                        isAdmin={isAdmin}
                        onUpdate={loadSweets}
                    />
                ))}
            </div>

            {filteredSweets.length === 0 && (
                <div className="text-center py-12">
                    <div className="text-6xl mb-4">🍬</div>
                    <h3 className="text-xl font-semibold text-gray-600">No sweets found</h3>
                    <p className="text-gray-500">Try adjusting your search filters</p>
                </div>
            )}
        </div>
    );
};

export default SweetList;