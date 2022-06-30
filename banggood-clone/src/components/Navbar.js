import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { IN } from "country-flag-icons/react/3x2";

export default function Navbar() {
  return (
    <>
    <div className="header-wrapper">
      <div className="header-div1">
        <img src={require("../images/logoimage.png")} />
        <div>
          <form className="nav-searchform">
            <input
              type="text"
              placeholder="Search.."
              name="search"
              className="nav-searchform-inp"
              id="1231"
            />
            <button type="submit" className="nav-searchform-btn">
              <FontAwesomeIcon icon={faSearch} color="white" />
            </button>
          </form>
          <div className="nav-serch12">
            <a>hqprop</a>
            <a>two trees</a>
            <a>deli</a>
            <a>eachine novice-iv</a>
            <a>zd racing</a>
            <a>drone</a>
            <a>topshak</a>
            <a>poco f3</a>
          </div>
        </div>
        <div>
          <div className="nav-shipping">Ship to</div>
          <div className="nav-flagdiv">
            <IN title="India" className="nav-flag" />
            <div> / English (India) /USD</div>
          </div>
        </div>
        <div className="navbar-userdiv">
          <FontAwesomeIcon icon={faUser} className="navbar-user" />
          <div>
            <div className="nav-shipping2">Hello</div>
            <div className="nav-signin">Sign in</div>
          </div>
        </div>
        <div className="nav-cart">
          <FontAwesomeIcon icon={faChartBar} color="white" />
          <div>
            <p>0</p>
          </div>
        </div>
      </div>
      <div className="nav-div2">
        <div className="nav-div2-1"></div>
        <div className="nav-div2-2">
          <a>FLASH DEALS</a>
          <a>CLEARANCE SALE</a>
          <a>TOP SELLERS</a>
          <a>LIVE</a>
        </div>
      </div>
    </div>
    <div className="navbar-dropdown">
      <div className="navbar-dropdown1"> <FontAwesomeIcon icon={faBars} color="#ff6e26" /> <p>CATAGORIES    &#62;</p></div>
      <div className="navbar-dropdown2">Women's Clothing </div>
      <div className="navbar-dropdown2">Men's Clothing</div>
      <div className="navbar-dropdown2">Phones & Accessories</div>
      <div className="navbar-dropdown2">Electronics</div>
      <div className="navbar-dropdown2">Tools, Industrial & Scientific</div>
      <div className="navbar-dropdown2">Toys Hobbies and Robot</div>
      <div className="navbar-dropdown2">Computers & Office</div>
      <div className="navbar-dropdown2">Automobiles & Motorcycles</div>
      <div className="navbar-dropdown2">Sports & Outdoor</div>
      <div className="navbar-dropdown2">Home, Garden & Furniture</div>
      <div className="navbar-dropdown2">Jewelry & Watches</div>
      <div className="navbar-dropdown2">Home Appliances</div>
      <div className="navbar-dropdown2">Shoes & Bags</div>
      <div className="navbar-dropdown2">Health,Beauty & Hair</div>
      <div className="navbar-dropdown2">Lights & Lighting</div>
    </div>
    </>
  );
}
