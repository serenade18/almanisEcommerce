import React from 'react'
import '../info/info.css'

const Info = () => {
  return (
    <div className='header-top header-top-ptb-1 d-none d-lg-block'>
      <div className='container-fluid'>
        <div className="row align-items-center justify-content-between">
          <div className="d-flex col-xl-4 col-lg-4">
            <div className="header-info">
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="page-account.html">My Account</a></li>
                <li><a href="shop-wishlist.html">Wishlist</a></li>
                <li><a href="shop-order.html">Order Tracking</a></li>
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
                  <ul className="language-dropdown">
                    <li><a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />Français</a></li>
                    <li><a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />Deutsch</a></li>
                    <li><a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />Pусский</a></li>
                  </ul>
                </li>
                <li>
                  <a className="language-dropdown-active" href="#">USD <i className="fi-rs-angle-small-down"></i></a>
                  <ul className="language-dropdown">
                    <li><a href="#"><img src="assets/imgs/theme/flag-fr.png" alt="" />INR</a></li>
                    <li><a href="#"><img src="assets/imgs/theme/flag-dt.png" alt="" />MBP</a></li>
                    <li><a href="#"><img src="assets/imgs/theme/flag-ru.png" alt="" />EU</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Info
