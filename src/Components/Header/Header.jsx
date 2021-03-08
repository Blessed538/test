import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div>
      <div className="Header">
        <div className="Header__inner">
          <div className="Header__sidebarTrigger">
            <div className="SidebarTrigger">
              <button className="SidebarTrigger__button">
                <i className="icon-inno icon-inno_menu" />
              </button>
            </div>
          </div>
          <div className="Header__logo">
            <div className="LogoLink">
              <a href="https://innoloft.com/public" className="LogoLink__link">
                <img
                  className="LogoDesktop LogoDesktop--header"
                  src="https://anvkgjjben.cloudimg.io/width/400/x/https://img.innoloft.de/innoloft-no-white-space.svg"
                  alt="logo"
                />
              </a>
            </div>
          </div>

          <div className="Header__menu">
            <nav className="HeaderUserMenu"></nav>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default Header;
