import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../../Context/AuthContext";

// Import the logo image
import logo from "../../../../assets/images/logo.png";
import iconBar from "../../../../assets/images/icons/icon-bar.png";
import iconClose from "../../../../assets/images/icons/icon-bar.png";

function Header(props) {
  const [width, setWidth] = useState(window.innerWidth);
  const [mobileNavMenu, setMobileNavMenu] = useState(false); // State to control mobile navigation menu
  const navigator = useNavigate();
  const { isLogged, setIsLogged, employee, isAdmin, fetchData } = useAuth();

  useEffect(() => {
    // Add event listener to handle window resize
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // handle resize
  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  // logout function
  const handleLogout = () => {
    localStorage.removeItem("employee");
    setIsLogged(false);
    fetchData();
  };

  // handle Icon Bar Click
  const handleIconBarClick = () => {
    setMobileNavMenu(!mobileNavMenu);
  };

  return (
    <div>
      <header className="main-header header-style-one">
        {/* Header top section */}
        <div className="header-top">
          <div className="auto-container">
            <div className="inner-container">
              <div className="left-column">
                <div className="text">Enjoy the Beso while we fix your car</div>
                <div className="office-hour">Monday - Saturday 8:00AM - 17:00PM</div>
              </div>
              <div className="right-column mr-2">
                <div className="phone-number">
                  {isLogged ? (
                    <>
                      <span>Welcome</span> {employee.employee_first_name}{" "}
                    </>
                  ) : (
                    "Schedule Your Appointment Today:"
                  )}
                  <strong>+251904825407</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Header upper section */}
        <div className="header-upper">
          <div className="auto-container">
            <div className="inner-container">
              {/* Logo */}
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" />
                  </Link>
                </div>
              </div>
              {/* Right column */}
              <div className="right-column">
                {/* Mobile navigation toggler */}
                <div className="nav-outer">
                  <div className="mobile-nav-toggler" onClick={handleIconBarClick}>
                    <img src={mobileNavMenu ? iconClose : iconBar} alt="" />
                  </div>
                  {/* Navigation */}
                  <nav className={`main-menu ${mobileNavMenu ? 'show' : ''}`}>
                    <div className="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                      <ul className="navigation">
                        <li className="dropdown">
                          <Link to="/" onClick={handleIconBarClick}>Home</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/about" onClick={handleIconBarClick}>About Us</Link>
                        </li>
                        <li className="dropdown">
                          <Link to="/services" onClick={handleIconBarClick}>Services</Link>
                        </li>
                        <li>
                          <Link to="/contact" onClick={handleIconBarClick}>Contact Us</Link>
                        </li>
                        <li>{isLogged && <Link to="/admin" onClick={handleIconBarClick}>Admin</Link>}</li>
                        <li>
                          {isLogged ? (
                            <div className="btn-link">
                              <Link className="theme-btn btn-style-two" onClick={handleLogout}>LOG OUT</Link>
                            </div>
                          ) : (
                            <div className="btn-link">
                              <Link to="/login" className="theme-btn btn-style-one" onClick={handleIconBarClick}>Login</Link>
                            </div>
                          )}
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
