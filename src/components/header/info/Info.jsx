import React, { useState } from 'react';
import '../info/info.css';
import { ClickAwayListener } from '@mui/material';
import flags from '../../../constants/flags';
import { Link } from 'react-router-dom';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const currencies = [
    { code: 'KES', name: 'Kenyan Shilling', flag: flags.Kenya },
    { code: 'TZS', name: 'Tanzanian Shilling', flag: flags.Tanzania },
    { code: 'UGX', name: 'Ugandan Shilling', flag: flags.Uganda },
    { code: 'RWF', name: 'Rwandan Franc', flag: flags.Rwanda },
    { code: 'BIF', name: 'Burundian Franc', flag: flags.Burundi }
];

const Info = () => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);

    const openCurrency = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
    };

    const handleSelectedCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsCurrencyOpen(false);
    };

    return (
        <div className='hidden lg:block pt-4 pb-4'>
            <div className='container mx-auto'>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex space-x-4">
                            <Link to={'/about'} className="text-gray-600">About Us</Link>
                            <Link to={''} className="text-gray-600">My Account</Link>
                            <Link to={''} className="text-gray-600">Wishlist</Link>
                            <Link to={''} className="text-gray-600">Order Tracking</Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div id="news-flash" className="inline-block overflow-hidden relative h-4">
                            <ul className="absolute m-0 p-0 top-0">
                                <li className="m-0 p-0 h-4">Trendy 25silver jewelry, save up 35% off today</li>
                                <li className="m-0 p-0 h-4">100% Secure delivery without contacting the courier</li>
                                <li className="m-0 p-0 h-4">Supper Value Deals - Save more with coupons</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:space-x-4">
                        <div className="flex space-x-2">
                            <span>Need help? Call Us: <strong className="text-brand text-green-600">0792 902 809</strong></span>
                            <a className="relative cursor-pointer">English <i className="fi-rs-angle-small-down"></i></a>
                            <a className="relative cursor-pointer" onClick={openCurrency}>
                                <img src={selectedCurrency.flag} className="h-5 w-5 mr-1" alt={selectedCurrency.code} />
                                {selectedCurrency.code}
                                {isCurrencyOpen ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />} 
                            </a>
                            {isCurrencyOpen && (
                                <ClickAwayListener onClickAway={() => setIsCurrencyOpen(false)}>
                                    <ul className="absolute bg-white border border-gray-300 shadow-lg">
                                        {currencies.map((currency) => (
                                            <li key={currency.code} onClick={() => handleSelectedCurrency(currency)} className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                                                <img src={currency.flag} className="h-5 w-5 mr-2" alt={currency.code} />
                                                {currency.code} - {currency.name}
                                            </li>
                                        ))}
                                    </ul>
                                </ClickAwayListener>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Info;