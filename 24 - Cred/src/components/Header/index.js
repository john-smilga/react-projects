import React, { useState } from 'react'; 
import './header.css';

 const Header = () => {
    const [showMobMenu,setShowMobMenu] = useState(false); 
    const toggleMobileMenu = () => {
        setShowMobMenu(!showMobMenu);
    }
    return (
        <div className="mobile-menu-wrapper">
            <div className={`mobile-menu only-mobile ${showMobMenu ? "overlay": ""}`}>
                <div className='mobile-navbar'>
                <div className='mobile-nav-item'>credit score check</div>
                    <div className='mobile-nav-item'>CRED pay</div>
                </div>
            </div>
            <div className="flex max-width header">
                <img className="header-logo" src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png" alt="Cred logo" />
                <div className="only-mobile mobile-menu-button-wrapper">
                    <button class={`hamburger hamburger--elastic ${showMobMenu ?"is-active":""}`} type="button" onClick={ toggleMobileMenu }>
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
                <div className='non-mobile flex'>
                    <div className='header-nav-item'>credit score check</div>
                    <div className='header-nav-item'>CRED pay</div>
                </div>
            </div>
        </div>
    );
};
export default Header;
