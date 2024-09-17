import React, { useState } from 'react';
import '../selectDropdown/select.css';
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
        <div className="selectDrop cursor-pointer me-2">
            <span className="openDrop" onClick={toggleDrop}>
                {selectedCategory || 'All Categories'} {isOpenDrop ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
            </span>
            {isOpenDrop && (
                <ClickAwayListener onClickAway={() => setIsOpenDrop(false)}>
                    <div className="selector">
                        <div className="searchField">
                            <input
                                type="text"
                                placeholder="Search categories"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <ul className="selectcategory">
                                {filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleCategorySelect(category)}
                                            className={category === selectedCategory ? 'active' : ''}
                                        >
                                            {category}
                                        </li>
                                    ))
                                ) : (
                                    <li>No categories found</li>
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
