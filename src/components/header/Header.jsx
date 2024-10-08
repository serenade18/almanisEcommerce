import React from 'react';
import '../header/Header.css';
import icons from '../../constants/icons';
import SearchIcon from '@mui/icons-material/Search';
import Select from './selectDropdown/Select';
import Counties from './selectLocation/Counties';

import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import GpsFixedOutlinedIcon from '@mui/icons-material/GpsFixedOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsInputCompositeOutlinedIcon from '@mui/icons-material/SettingsInputCompositeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import Info from './info/Info';
import Nav from './nav/Nav';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* <Info/> */}
      <header> 
        <Info/>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-12 col-sm-3 col-md-2 col-lg-1">
              <Link to={'/'}>
                <img src={icons.Logo} alt="Logo" className="img-fluid" />
              </Link>
            </div>

            {/* Header Search Section */}
            <div className="col-12 col-sm-9 col-md-4 col-lg-5 mt-2 mt-sm-0">
              <div className="headersearch d-flex align-items-center">
                {/* Category Dropdown */}
                <Select/>
                {/* Search Input */}
                <div className="search d-flex align-items-center flex-grow-1">
                  <input
                    type="text"
                    placeholder="Search for items..."
                  />
                  <SearchIcon className="searchicon ms-2" />
                </div>
              </div>
            </div>

            {/* county and wishlist section */}
            <div className="col-12 col-sm-6 col-md-6 col-lg-6 d-flex  align-items-center justify-content-end justify-content-between">
                <Counties className="counties"/>
                <div className="ml-auto d-flex align-items-center">
                    <ul className="list ms-5 list-inline mb-0 headerTabs">
                        <li className='list-inline-item'>
                            <span>
                                <img src={icons.Refresh}/>
                                <span className='badge bg-success rounded-circle'>3</span>
                                Compare
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span>
                                <img src={icons.Wish}/>
                                <span className='badge bg-success rounded-circle'>3</span>
                                Wishlist
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span>
                                <img src={icons.Cart}/>
                                <span className='badge bg-success rounded-circle'>3</span>
                                Cart
                            </span>
                        </li>
                        <li className='list-inline-item'>
                            <span>
                                <img src={icons.User}/>
                                Account
                            </span>

                            <ul className="dropdownMenu">
                                <li>
                                  <Button>
                                    <PersonOutlineOutlinedIcon/>
                                    My Account
                                  </Button>
                                </li>
                                <li>
                                  <Button>
                                    <GpsFixedOutlinedIcon/>
                                    Order Tracking
                                  </Button>
                                </li>
                                <li>
                                  <Button>
                                    <FavoriteBorderOutlinedIcon/>
                                    My Wishlist
                                  </Button>
                                </li>
                                <li>
                                  <Button>
                                    <SettingsInputCompositeOutlinedIcon/>
                                    Settings
                                  </Button>
                                </li>
                                <li>
                                  <Button>
                                    <LogoutOutlinedIcon/>
                                    Sign out
                                  </Button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
              
            </div>
          </div>
        </div>
        <Nav/>
      </header>
    </>
  );
}

export default Header;
