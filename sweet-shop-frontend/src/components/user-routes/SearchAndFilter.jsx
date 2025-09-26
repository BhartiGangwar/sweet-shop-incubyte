import React, { useState } from 'react';

const SearchAndFilter = ({ onSearch }) => {
    const [filters, setFilters] = useState({
        name: '',
        category: '',
        minPrice: '',
        maxPrice: ''
    });

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

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        onSearch(newFilters);
    };

    const clearFilters = () => {
        const clearedFilters = {
            name: '',
            category: '',
            minPrice: '',
            maxPrice: ''
        };
        setFilters(clearedFilters);
        onSearch(clearedFilters);
    };

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Name Search */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Search by Name</label>
                    <input
                        type="text"
                        value={filters.name}
                        onChange={(e) => handleFilterChange('name', e.target.value)}
                        placeholder="Sweet name..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                {/* Category Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <select
                        value={filters.category}
                        onChange={(e) => handleFilterChange('category', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                        <option value="">All Categories</option>
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Min Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Min Price</label>
                    <input
                        type="number"
                        step="0.01"
                        value={filters.minPrice}
                        onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                        placeholder="0.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>

                {/* Max Price */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Max Price</label>
                    <input
                        type="number"
                        step="0.01"
                        value={filters.maxPrice}
                        onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                        placeholder="100.00"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                </div>
            </div>
            
            {/* Clear Filters Button */}
            <div className="flex justify-end mt-4">
                <button
                    onClick={clearFilters}
                    className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
                >
                    Clear Filters
                </button>
            </div>
        </div>
    );
};

export default SearchAndFilter;