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
    const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]); // Default to KES

    const openCurrency = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
    };

    const handleSelectedCurrency = (currency) => {
        setSelectedCurrency(currency);
        setIsCurrencyOpen(false);
    };

    return (
        <div className='header-top header-top-ptb-1 d-none d-lg-block'>
            <div className='container-fluid'>
                <div className="row align-items-center justify-content-between">
                    <div className="d-flex col-xl-4 col-lg-4">
                        <div className="header-info">
                            <ul>
                                <li><Link to={'/about'}>About Us</Link></li>
                                <li><Link to={''}>My Account</Link></li>
                                <li><Link to={''}>Wishlist</Link></li>
                                <li><Link to={''}>Order Tracking</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="text-center">
                            <div id="news-flash" className="d-inline-block" style={{ overflow: "hidden", position: "relative", height: "14px" }}>
                                <ul style={{ position: "absolute", margin: "0px", padding: "0px", top: "0px" }}>
                                    <li style={{ margin: "0px", padding: "0px", height: "14px" }}>Trendy 25silver jewelry, save up 35% off today</li>
                                    <li style={{ margin: "0px", padding: "0px", height: "14px" }}>100% Secure delivery without contacting the courier</li>
                                    <li style={{ margin: "0px", padding: "0px", height: "14px" }}>Supper Value Deals - Save more with coupons</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4">
                        <div className="header-info header-info-right">
                            <ul>
                                <li>Need help? Call Us: <strong className="text-brand text-success">0792 902 809</strong></li>
                                <li>
                                    <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down"></i></a>
                                </li>
                                <li>
                                    <a className="language-dropdown-active" href="#" onClick={openCurrency}>
                                        <img src={selectedCurrency.flag} style={{height:'20px', width: '20px', marginRight: "5px"}} alt={selectedCurrency.code} />
                                         {selectedCurrency.code}
                                        {isCurrencyOpen ? <KeyboardArrowUpOutlinedIcon /> : <KeyboardArrowDownOutlinedIcon />} 
                                    </a>
                                    {isCurrencyOpen && (
                                        <ClickAwayListener onClickAway={() => setIsCurrencyOpen(false)}>
                                            <ul className="language-dropdown">
                                                {currencies.map((currency) => (
                                                    <li key={currency.code} onClick={() => handleSelectedCurrency(currency)}>
                                                        <span>
                                                            <img src={currency.flag} style={{height:'20px', width: '20px', marginRight: "5px"}} alt={currency.code} />
                                                            {currency.code} - {currency.name}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </ClickAwayListener>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Info;
