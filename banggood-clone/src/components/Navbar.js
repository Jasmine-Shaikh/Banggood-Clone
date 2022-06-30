import React from "react";
import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FaShoppingCart } from "react-icons/fa";
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
            <FaShoppingCart className="carticon-navbar" size="30" />
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
      <div className="nav-drop-dic-cat">
        <div className="navbar-dropdown">
          <div className="navbar-dropdown1">
            <FontAwesomeIcon icon={faBars} color="#ff6e26" />{" "}
            <p>CATAGORIES &#62;</p>
          </div>
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
        <div className="nav-catagories-menu">
          <div>
            <p>
              <b>Dresses</b>
            </p>
            <p>Midi Dresses</p>
            <p>Maxi Dresses</p>
            <p>Mini Dresses</p>
            <p>Long Sleeve Dresses</p>
            <p>Bodycon/wrap Dresses</p>
            <p>Shirt Dresses</p>
            <p>
              <b>Outerwear</b>
            </p>
            <p>Coats&jackets</p>
            <p>Cardigans</p>
            <p>Blazers</p>
            <p>
              <b>Plus Sizes</b>
            </p>
            <p>Plus Size Dresses</p>
            <p>Plus Size Tops</p>
            <p>Plus Size Bottoms</p>
            <p>Plus Size Outerwear</p>
            <p>
              <b>Activewear</b>
            </p>
            <p>Tops</p>
          </div>
          <div>
            <p>
              <b>Tops</b>
            </p>
            <p>Blouses&shirts</p>
            <p>Tshirts</p>
            <p>Tank Tops</p>
            <p>Hoodies & Sweatshirts</p>
            <p>Sweaters</p>
            <p>
              <b>Two-Piece Set</b>
            </p>
            <p>
              <b>Sleepwear</b>
            </p>
            <p>Pajamas</p>
            <p>Nightgowns</p>
            <p>
              <b>Swimwear</b>
            </p>
            <p>Swimdresses</p>
            <p>Cover Ups</p>
            <p>Accessories</p>
            <p>One Piece</p>
            <p>Tankinis</p>
            <p>Plus Size</p>
            <p>Bikinies</p>
          </div>
          <div>
            <p>
              <b>Bottoms</b>
            </p>
            <p>Skirts</p>
            <p>Leggings</p>
            <p>Shorts</p>
            <p>Pants</p>
            <p>Jeans</p>
            <p>Jumpsuits</p>
            <p>
              <b>Women's Accessories</b>
            </p>
            <p>Eyeglasses & Sunglasses</p>
            <p>Earmuffs & Mouthmuffs</p>
            <p>Glove Sets</p>
            <p>Hats & Caps</p>
            <p>Headwear</p>
            <p>Scarf & Shawl & Square</p>
            <p>Socks</p>
            <p>Belts</p>
          </div>
          <div>
            <p>
              <b>Trending</b>
            </p>
            <p>Sexy Classy Dresses</p>
            <p>Ladies Jumpsuits</p>
            <p>Casual Shorts</p>
            <p>Tie Dye Tops</p>
            <p>Plus Size Swimsuit</p>
            <p>At Home</p>
            <p>Ladies Scarf</p>
            <p>Small Beanie</p>
          </div>
        </div>
      </div>
    </>
  );
}
