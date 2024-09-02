import React, { useState } from 'react';
import '../info/info.css';
import { ClickAwayListener } from '@mui/material';
import flags from '../../../constants/flags';

const Info = () => {
    const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

    const openCurrency = () => {
        setIsCurrencyOpen(!isCurrencyOpen);
    };

    return (
        <div className='header-top header-top-ptb-1 d-none d-lg-block'>
            <div className='container-fluid'>
                <div className="row align-items-center justify-content-between">
                    <div className="d-flex col-xl-4 col-lg-4">
                        <div className="header-info">
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Order Tracking</a></li>
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
                                <li>Need help? Call Us: <strong className="text-brand text-success">+254 792 902 809</strong></li>
                                <li>
                                    <a className="language-dropdown-active" href="#">English <i className="fi-rs-angle-small-down"></i></a>
                                </li>
                                <li>
                                    <a className="language-dropdown-active" href="#" onClick={openCurrency}>
                                        KES <i className="fi-rs-angle-small-down"></i>
                                    </a>
                                    {isCurrencyOpen && (
                                        <ClickAwayListener onClickAway={() => setIsCurrencyOpen(false)}>
                                            <ul className="language-dropdown">
                                                <li>
                                                    <span>
                                                        <img src={flags.Kenya} style={{height:'20px', width: '20px'}} alt="KE" />KES - Kenyan Shilling
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={flags.Tanzania} style={{height:'20px', width: '20px'}} alt="TZ" />TZS - Tanzanian Shilling
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={flags.Uganda} style={{height:'20px', width: '20px'}} alt="UG" />UGX - Ugandan Shilling
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={flags.Rwanda} style={{height:'20px', width: '20px'}} alt="RWA" />RWF - Rwandan Franc
                                                    </span>
                                                </li>
                                                <li>
                                                    <span>
                                                        <img src={flags.Burundi} style={{height:'20px', width: '20px'}} alt="BUR" />BIF - Burundian Franc
                                                    </span>
                                                </li>
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
