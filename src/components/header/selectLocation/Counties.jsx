import React, { useState } from 'react';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import { ClickAwayListener } from '@mui/material';
import counties from '../../../constants/counties';

const Counties = () => {
    const [isOpenLocation, setIsOpenLocation] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

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
        <div className="flex-grow cursor-pointer me-2">
            <span className="flex items-center text-blue-500" onClick={toggleLocation}>
                <FmdGoodOutlinedIcon className="ml-2" /> {selectedLocation || 'Your Location'} {isOpenLocation ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />}
            </span>
            {isOpenLocation && (
                <ClickAwayListener onClickAway={() => setIsOpenLocation(false)}>
                    <div className="absolute bg-white shadow-lg mt-2 rounded">
                        <div className="p-2">
                            <input
                                type="text"
                                placeholder="Search location"
                                value={searchQuery}
                                onChange={handleSearchChange}
                                className="border border-gray-300 rounded p-2 w-full"
                            />
                            <ul className="max-h-60 overflow-y-auto">
                                {filteredLocation.length > 0 ? (
                                    filteredLocation.map((location, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleLocationSelect(location)}
                                            className={`cursor-pointer p-2 hover:bg-gray-200 ${location === selectedLocation ? 'bg-blue-100' : ''}`}
                                        >
                                            {location}
                                        </li>
                                    ))
                                ) : (
                                    <li className="p-2">No location found</li>
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