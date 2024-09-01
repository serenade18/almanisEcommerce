import React from 'react';
import '../header/Header.css';
import icons from '../../constants/icons';
import SearchIcon from '@mui/icons-material/Search';
import Select from './selectDropdown/Select';
import Counties from './selectLocation/Counties';

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-12 col-sm-3 col-md-2 col-lg-1">
              <img src={icons.Logo} alt="Logo" className="img-fluid" />
            </div>

            {/* Header Search Section */}
            <div className="col-12 col-sm-9 col-md-10 col-lg-6 mt-2 mt-sm-0">
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
            <div className="col-12 col-sm-6 col-lg-5 d-flex align-items-center">
                <Counties/>
                <div className="ml-auto d-flex align-items-center">
                    <ul className="list list-inline mb-0 headerTabs">
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
                        </li>
                    </ul>
                </div>
              
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
