// import { React, useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import "../styles/navbar.css";
// import Overlay from "./Overlay";
// import Logo from "../img/logo2.png";
// import { AuthContext } from "../context/authContext";

// const Navbar = () => {
//   const [isToggled, setIsToggeled] = useState(false);
//   const handleClick = () => setIsToggeled(!isToggled);

//   return (
//     <div className="nav_wrapper">
//       <div className="navContainer">
//         <div className="logo">
//           <img src={Logo} />
//         </div>

//         <div
//           onClick={handleClick}
//           className={isToggled ? "menu_active" : "menu"}
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </div>
//         <Overlay toggleData={isToggled} />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect, useContext } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import { AuthContext } from "../context/authContext";


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {currentUser ? (
              <li className='nav-item'>
                <Link to='write' className='nav-links' onClick={closeMobileMenu}>
                  Write
                </Link>
              </li>
            ) : (
              <li>
                <Link
                  to='/login'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  SIGN UP
                </Link>
              </li>
            )}

            {currentUser ? (
              <div className='logoutDiv'>
                <Link className='nav-links' onClick={logout}>
                  Logout
                </Link>
                
                <img className="userAvatar" src={currentUser?.img}></img>
             
              </div>
            ) : (<Link
              to='/login'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Login
            </Link>)
            }
          </ul>

          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}

          {/* {currentUser ? (
            <Button onClick={logout} buttonStyle='btn--outline'>Logout</Button>
          ) : (
            <Link to='/register'>
              <Button buttonStyle='btn--outline'>Sign In</Button>
            </Link>
          )} */}

          {/* {currentUser &&
            <div>
              <div>Random</div>
              <span>{currentUser?.username}</span>
            </div>
          } */}

        </div>
      </nav>
    </>
  );
}

export default Navbar;
