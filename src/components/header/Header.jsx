import React from 'react';
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
      <header className="bg-white shadow">
        <Info />
        <div className="container mx-auto flex flex-col">
          <div className="flex items-center">
            {/* Logo */}
            <div className="w-full sm:w-1/4 md:w-1/5 lg:w-1/6">
              <Link to={'/'}>
                <img src={icons.Logo} alt="Logo" className="w-full" />
              </Link>
            </div>

            {/* Header Search Section */}
            <div className="w-full sm:w-3/4 md:w-2/5 lg:w-5/12 mt-2 sm:mt-0">
              <div className="flex items-center">
                {/* Category Dropdown */}
                <Select />
                {/* Search Input */}
                <div className="flex items-center flex-grow ml-2">
                  <input
                    type="text"
                    placeholder="Search for items..."
                    className="border rounded p-2 flex-grow"
                  />
                  <SearchIcon className="ml-2" />
                </div>
              </div>
            </div>

            {/* County and Wishlist Section */}
            <div className="w-full sm:w-3/5 md:w-3/5 lg:w-5/12 flex items-center justify-end space-x-5">
              <Counties className="counties" />
              <div className="flex items-center">
                <ul className="flex space-x-5 list-none mb-0">
                  <li>
                    <span className="flex items-center">
                      <img src={icons.Refresh} alt="Refresh" />
                      <span className="bg-green-500 text-white rounded-full px-2 ml-1">3</span>
                      Compare
                    </span>
                  </li>
                  <li>
                    <span className="flex items-center">
                      <img src={icons.Wish} alt="Wishlist" />
                      <span className="bg-green-500 text-white rounded-full px-2 ml-1">3</span>
                      Wishlist
                    </span>
                  </li>
                  <li>
                    <span className="flex items-center">
                      <img src={icons.Cart} alt="Cart" />
                      <span className="bg-green-500 text-white rounded-full px-2 ml-1">3</span>
                      Cart
                    </span>
                  </li>
                  <li className="relative">
                    <span className="flex items-center">
                      <img src={icons.User} alt="Account" />
                      Account
                    </span>
                    <ul className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2">
                      <li>
                        <Button>
                          <PersonOutlineOutlinedIcon />
                          My Account
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <GpsFixedOutlinedIcon />
                          Order Tracking
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <FavoriteBorderOutlinedIcon />
                          My Wishlist
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <SettingsInputCompositeOutlinedIcon />
                          Settings
                        </Button>
                      </li>
                      <li>
                        <Button>
                          <LogoutOutlinedIcon />
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
        <Nav />
      </header>
    </>
  );
}

export default Header;