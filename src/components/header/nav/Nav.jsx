import React from 'react';
import '../nav/nav.css';

import Button from '@mui/material/Button';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='nav d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12 d-flex align-items-center "> 
                            <Button className="catTab bg-success text-white align-items-center text-capitalize">
                              <DashboardCustomizeOutlinedIcon className='me-1'/> 
                                Browse All Categories
                              <KeyboardArrowDownOutlinedIcon className='ms-2 text-sm'/>
                            </Button>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12 d-flex align-items-center"> 
                            <nav>
                              <ul className="list list-inline mb-0">
                                <li className="list-inline-item">
                                    <Button>
                                        <Link>
                                        <LocalFireDepartmentOutlinedIcon className='text-success me-2'/>
                                        Deals
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to={'/'}>Home</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to={'/about'}>About</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to={'/shop'}>Shop</Link>
                                    </Button>
                                </li>
                                {/* <li className="list-inline-item">
                                    <Button>
                                        <Link>
                                            Mega menu <KeyboardArrowDownOutlinedIcon className='ms-0'/>
                                        </Link>
                                    </Button>
                                </li> */}
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to={'/partner'}>Become a partner</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button>
                                        <Link to={'/contact'}>Contact</Link>
                                    </Button>
                                </li>
                              </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12 d-flex align-items-center justify-content-end"> 
                            <div className="phoneNo d-flex align-items-center ml-auto">
                                <span>
                                    <HeadsetOutlinedIcon className='text-secondary me-2'/>
                                </span>
                                <div className="info ml-3">
                                    <h6 className="text-success mb-0 text-sm">+254 792 902 809</h6>
                                    <p className="mb-0 text-secondary mt-1 text-sm">24/7 support center</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
