import React from 'react';
import Button from '@mui/material/Button';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HeadsetOutlinedIcon from '@mui/icons-material/HeadsetOutlined';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <div className='nav flex items-center'>
                <div className="container-fluid">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/4 sm:w-1/2 flex items-center "> 
                            <Button className="catTab bg-green-500 text-white flex items-center capitalize">
                              <DashboardCustomizeOutlinedIcon className='mr-2'/> 
                                Browse All Categories
                              <KeyboardArrowDownOutlinedIcon className='ml-2 text-sm'/>
                            </Button>
                        </div>
                        <div className="w-full md:w-7/12 sm:w-full flex items-center"> 
                            <nav>
                              <ul className="list list-inline mb-0 flex flex-row">
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link>
                                        <LocalFireDepartmentOutlinedIcon className='text-green-500 mr-2'/>
                                        Deals
                                        </Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link to={'/'}>Home</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link to={'/about'}>About</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link to={'/shop'}>Shop</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link to={'/partner'}>Become a partner</Link>
                                    </Button>
                                </li>
                                <li className="list-inline-item mr-4">
                                    <Button>
                                        <Link to={'/contact'}>Contact</Link>
                                    </Button>
                                </li>
                              </ul>
                            </nav>
                        </div>
                        <div className="w-full md:w-1/4 sm:w-1/2 flex items-center justify-end"> 
                            <div className="phoneNo flex items-center ml-auto">
                                <span>
                                    <HeadsetOutlinedIcon className='text-gray-600 mr-2'/>
                                </span>
                                <div className="info ml-3">
                                    <h6 className="text-green-500 mb-0 text-sm">+254 792 902 809</h6>
                                    <p className="mb-0 text-gray-600 mt-1 text-sm">24/7 support center</p>
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