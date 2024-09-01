import React, { useState } from 'react';
import '../selectDropdown/select.css';

const Select = () => {
    const [isOpenDrop, setIsOpenDrop] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['Pishori', 'Komboka', 'Brown', 'Bran', 'Husk', 'Broken'];

    const toggleDrop = () => {
        setIsOpenDrop(!isOpenDrop);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredCategories = categories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="selectDrop cursor-pointer me-2">
            <span
                className="openDrop"
                onClick={toggleDrop}
            >
                All Categories
            </span>
            {
                isOpenDrop &&
                <div className="selector">
                    <div className="searchField">
                        <input
                            type="text"
                            placeholder="Search categories"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <ul className="selectcategory">
                            {
                                filteredCategories.length > 0 ? (
                                    filteredCategories.map((category, index) => (
                                        <li key={index} onClick={toggleDrop}>
                                            {category}
                                        </li>
                                    ))
                                ) : (
                                    <li>No categories found</li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Select;
