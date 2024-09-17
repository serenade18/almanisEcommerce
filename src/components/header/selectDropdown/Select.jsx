import React, { useState } from 'react';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { ClickAwayListener } from '@mui/material';

const Select = () => {
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = ['All Categories', 'Pishori', 'Komboka', 'Brown', 'Bran', 'Husk', 'Broken'];

    const toggleDrop = () => {
        setIsOpenDrop(!isOpenDrop);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
        setIsOpenDrop(false);
        setSearchQuery('');
    };

    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="relative cursor-pointer me-2">
            <span className="flex items-center" onClick={toggleDrop}>
                {selectedCategory || 'All Categories'} {isOpenDrop ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
            </span>
            {isOpenDrop && (
                <ClickAwayListener onClickAway={() => setIsOpenDrop(false)}>
                    <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-md">
                        <div className="p-2">
                            <input
                                type="text"
                                placeholder="Search categories"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="border border-gray-300 rounded-md p-1 mb-2 w-full"
                            />
                            <ul className="max-h-60 overflow-y-auto">
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleCategorySelect(category)}
                                            className={`cursor-pointer p-2 hover:bg-gray-200 ${category === selectedCategory ? 'bg-gray-300' : ''}`}
                                        >
                                            {category}
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2">No categories found</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default Select;