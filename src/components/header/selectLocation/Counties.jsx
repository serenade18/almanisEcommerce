import React, { useState } from 'react';
import '../selectLocation/counties.css';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { ClickAwayListener } from '@mui/material';
import counties from '../../../constants/counties';

const Counties = () => {
    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    // Flatten the counties data to get just the county names
    const location = counties.map(county => county.countyName);

    const toggleLocation = () => {
        setIsOpenLocation(!isOpenLocation);
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleLocationSelect = (location) => {
        setSelectedLocation(location);
        setIsOpenLocation(false);
        setSearchQuery('');
    };

    const filteredLocation = location.filter(loc =>
        loc.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="selectorDrop cursor-pointer flex-grow me-2">
            <span className="openLocation align-items-center text-primary" onClick={toggleLocation}>
                <FmdGoodOutlinedIcon className="locationIcon ms-2" /> {selectedLocation || 'Your location'} {isOpenLocation ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
            </span>
            {isOpenLocation && (
                <ClickAwayListener onClickAway={() => setIsOpenLocation(false)}>
                    <div className="selection">
                        <div className="searchField">
                            <input
                                type="text"
                                placeholder="Search location"
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                            <ul className="selectLocation">
                                {filteredLocation.length > 0 ? (
                                    filteredLocation.map((location, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleLocationSelect(location)}
                                            className={location === selectedLocation ? 'active' : ''}
                                        >
                                            {location}
                                        </li>
                                    ))
                                ) : (
                                    <li>No location found</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </ClickAwayListener>
            )}
        </div>
    );
};

export default Counties;
