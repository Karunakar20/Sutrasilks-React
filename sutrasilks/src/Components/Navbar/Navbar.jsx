import React, { useState } from 'react';
import './Navbar.css';
import logo_trans from '../../assets/sutrasilks.png';
import { Items_Data } from './Items';
import Searchbar from '../Common/SearchBar/Searchbar';
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { FiSearch } from "react-icons/fi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [user] = useState({
    name: "Karunkar",
    isLoggedIn: true
  });

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const toggleMobileSearch = () => {
    setMobileSearchOpen(!mobileSearchOpen);
  };

  return (
    <header className='main-content'>
      <div className='log-name'>
        <Link to="/">
          <img src={logo_trans} alt="Sutra Silks Logo" className="logo" />
          <span className="brand-name">SUTRA SILKS</span>
        </Link>
      </div>

      {/* Mobile Icons */}
      <div className='mobile-icons'>
        <FiSearch className="mobile-icon" onClick={toggleMobileSearch} />
        <VscAccount className="mobile-icon" />
        <CiHeart className="mobile-icon" />
        <PiShoppingCartLight className="mobile-icon" />
        {sidebarOpen ? (
          <IoMdClose className="mobile-icon hamburger-icon" onClick={toggleSidebar} />
        ) : (
          <GiHamburgerMenu className="mobile-icon hamburger-icon" onClick={toggleSidebar} />
        )}
      </div>

      {/* 🔥 Mobile Search Drawer */}
      {mobileSearchOpen && (
        <div className="search-drawer">
          <div className="search-drawer-header">
            <Searchbar />
            <IoMdClose className="close-icon" onClick={toggleMobileSearch} />
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <nav className={`items ${sidebarOpen ? 'sidebar-open' : ''}`}>
        {sidebarOpen && user.isLoggedIn && (
          <div className="sidebar-user-greeting">
            Hey, {user.name}
          </div>
        )}
        
        {Items_Data.map((item, index) => (
          <Link 
            key={index} 
            to={item.path} 
            className="nav-link" 
            onClick={() => setSidebarOpen(false)}
          >
            {item.title}
          </Link>
        ))}
      </nav>

      {/* Desktop Essentials */}
      <div className='essential-componets'>
        <div className='searchbar-component'>
          <Searchbar />
        </div>

        <Link to="/account" className="myaccount-link">
          <div className='myaccount'>
            
            <VscAccount />
            <span>My Account</span>
          
          </div>
         </Link>

        <Link to="/wislist" className="myaccount-link">
        <div className='wishlist'>
          <CiHeart />
          <span>Wishlist</span>
        </div>
        </Link>
        <Link to="/cart" className="myaccount-link">
        <div className='cart'>
          <PiShoppingCartLight />
          <span>Cart</span>
        </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
