import React from 'react';
import '../header/Header.css';
import icons from '../../constants/icons';
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDropdown/Select';

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-6 col-sm-3 col-md-2 col-lg-1">
              <img src={icons.Logo} alt="Logo" className="img-fluid" />
            </div>

            {/* Header Search Section */}
            <div className="col-12 col-sm-9 col-md-10 col-lg-6 mt-2 mt-sm-0">
              <div className="headersearch d-flex align-items-center">
                {/* Category Dropdown */}
                <Select />
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

            {/* Additional Space (Optional) */}
            <div className="d-none d-lg-block col-lg-3">
              {/* You can add more content here or leave it empty for spacing */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
