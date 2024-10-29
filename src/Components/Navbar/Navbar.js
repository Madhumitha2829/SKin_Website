// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { NavItems } from './NavItems';
import Dropdown from './Dropdown';
import { Link } from 'react-scroll';

function Navbar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  // Sticky navbar effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setMobileMenu((prevState) => !prevState);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="SkinCare" smooth={true} offset={-260} duration={500}>
            SkinCare
          </Link>
        </li>
        <li>
          <Link to="Reviews" smooth={true} offset={-260} duration={500}>
            Reviews
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} offset={-260} duration={500} className="btn">
            Contact us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />

      <ul className="nav-items">
        {NavItems.map((item) => {
          if (item.title === 'S') {
            return (
              <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link to={item.path}>{item.title}</Link>
                {dropdown && <Dropdown />}
              </li>
            );
          }
          return (
            <li key={item.id} className={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
