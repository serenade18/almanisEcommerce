import React from 'react';
import '../nav/nav.css';

import Button from '@mui/material/Button';
import DashboardCustomizeOutlinedIcon from '@mui/icons-material/DashboardCustomizeOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

const Nav = () => {
    return (
        <>
            <div className='nav d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12"> 
                            <Button className="catTab bg-success text-white align-items-center text-capitalize">
                              <DashboardCustomizeOutlinedIcon className='me-2'/> 
                              Browse All Categories
                              <KeyboardArrowDownOutlinedIcon className='ms-2 text-sm'/>
                            </Button>
                        </div>
                        <div className="col-md-7 col-sm-12 col-12"> 
                            <nav>
                              <ul className="list list-inline">
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                                <li className="list-inline-item"></li>
                              </ul>
                            </nav>
                        </div>
                        <div className="col-md-2 col-sm-6 col-12"> 
                            {/* Content for the third column */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Nav;
