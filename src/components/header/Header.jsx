import React from 'react';
import '../header/Header.css';
import icons from '../../constants/icons';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <>
      <header>
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-sm-1">
                    <img src={icons.Logo} />
                </div>

                {/* header serch section */}
                <div className="col-sm-6">
                    <div className="headersearch d-flex align-items-center mt-2">
                        <div className="selectDrop cursor-pointer">
                            All Categories
                        </div>
                        <div className="search d-flex align-items-center">
                            <input
                                type='text'
                                placeholder='Search for items....'
                            />
                            <SearchIcon/>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
      </header>
    </>
  )
}

export default Header
