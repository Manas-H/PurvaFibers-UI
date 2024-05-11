import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./Navigationbar.css";
import OutsideClickHandler from "react-outside-click-handler";
import Profile from "./pages/profile/Profile";
// import onClickOutside from "react-onclickoutside";
import Logoimage from "./images/pfi2.png";
import Rect from "./images/idk3.png";
import Bowl from "./images/idk4.png";
import Vert from "./images/idk5.png";
import Round from "./images/idk6.png";
import All from "./images/idk7.png";
import {
  FaAngleDown,
  FaAngleRight,
  FaBars,
  FaCartArrowDown,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
// import Cart from "./products/Cart";

// import Cart from "./products/Cart";

const Navigationbar = () => {
  const auth = localStorage.getItem("token");
  const dropdownRef = useRef(null);
  // const navigate = useNavigate();
  const [showMediaIcon, setShowMediaIcon] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  // const [showCart, setShowCart] = useState(false);

  // const [showModal, setShowModal] = useState(false);

  const quantity = useSelector((state) => state.cart.distinctItemCount);

  const handleClick = () => {
    // toggle state
    setShowProducts((current) => !current);
  };

  // method for cart

  // const handleClose = () => {
  //   setShowCart(false);
  // };
  // const handleOpen = () => {
  //   setShowCart(true);
  // };

  // const openModal = () => {
  //   setShowModal(true);
  //   console.log("modal is open");
  // };

  return (
    <div className="navigation w-full">
      <nav className="main-nav w-full">
        {/* Logo name */}
        <div className="logo flex items-center w-[200px]">
          <NavLink to="/" className="link">
            <img
              className="logo-img w-14 h-14 md:w-20 md:h-20  "
              src={Logoimage}
              alt="Logo"
            ></img>
          </NavLink>
          <h1 className="hidden md:block logo-title w-full text-lg md:text-3xl no-underline">
            Purva Fiber Industry
          </h1>
        </div>

        {/* Menu links that is Navigation */}
        <div className={showMediaIcon ? "mobile-menu-link" : "menu-links"}>
          <ul className="pl-0">
            <NavLink to="/" className="link">
              <li>Home</li>
            </NavLink>

            <li onClick={handleClick}>
              <div className={showProducts ? "bg-sal" : "btn-hov"}>
                <div className="flex justify-center">
                  <p className="link mb-0">Products</p>
                  <FaAngleDown
                    style={{ fontSize: 15, fontWeight: 200, marginTop: 10 }}
                  />
                </div>
              </div>
              {/* <FaAngleDown style={{ fontSize: 15, fontWeight: 200 }} /> */}
            </li>

            <NavLink to="/about" className="link">
              <li>
                About
                {/* <NavLink to="/" className="">About</NavLink> */}
              </li>
            </NavLink>

            <NavLink to="/contact" className="link">
              <li> Contact us </li>
            </NavLink>

            {auth ? (
              <div className="li mt-1 relative">
                <NavLink to="/cart" className="no-underline">
                  <li
                    title="Cart"
                    className="cart pl-[50px] flex justify-center items-center "
                  >
                    <div>
                      <span className="mr-2">Add to Cart</span>{" "}
                    </div>
                    <div className="flex">
                      <FaCartArrowDown
                        // onClick={() => setShowCart(!showCart)}
                        onMouseOver={({ target }) =>
                          (target.style.color = "orange")
                        }
                        onMouseOut={({ target }) =>
                          (target.style.color = "white")
                        }
                        size="20px "
                        // onClick={handleOpen}
                      />
                      <sup className="badge">{quantity}</sup>
                    </div>
                    {/* <Cart onClose={handleClose} showCart={showCart} /> */}
                  </li>
                </NavLink>
                {/* {showCart && <Cart />} */}
              </div>
            ) : (
              <div className="li mt-1">
                <NavLink
                  to="/login"
                  className="link flex justify-center items-center"
                >
                  <li
                    title="Cart"
                    className="cart flex justify-center items-center "
                  >
                    <div>
                      <span className="mr-2">Add to Cart</span>{" "}
                    </div>
                    <div className="flex">
                      <FaCartArrowDown
                        onMouseOver={({ target }) =>
                          (target.style.color = "orange")
                        }
                        onMouseOut={({ target }) =>
                          (target.style.color = "white")
                        }
                        size="20px "
                        // onClick={handleOpen}
                      />
                      <sup className="badge">{quantity}</sup>
                    </div>
                    {/* <Cart onClose={handleClose} showCart={showCart} /> */}
                  </li>
                </NavLink>
              </div>
            )}

            {/* this is for account where when click outside then closes */}
            {auth ? (
              <div className="li mt-1">
                <li className="account"  onClick={() => setShowButton(!showButton)}>
                  {/* outside click close the content */}
                  <OutsideClickHandler
                    onOutsideClick={() => setShowButton(false)}
                    disabled={!showButton}
                    ref={dropdownRef}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        onClick={() => setShowButton(true)}
                        className="mr-2"
                      >
                        {" "}
                        Account{" "}
                      </span>{" "}
                      <FaUser
                        title=" profile"
                        onClick={() => setShowButton(!showButton)}
                        onMouseOver={({ target }) =>
                          (target.style.color = "orange")
                        }
                        onMouseOut={({ target }) =>
                          (target.style.color = "white")
                        }
                      />
                    </div>
                  </OutsideClickHandler>
                </li>
                {showButton && <Profile />}
              </div>
            ) : (
              <div className="li mt-1">
                <li className="account ">
                  <OutsideClickHandler
                    onOutsideClick={() => setShowButton(false)}
                    disabled={!showButton}
                    ref={dropdownRef}
                  >
                    <div className="flex justify-center items-center">
                      <span
                        className="mr-2"
                        onClick={() => setShowButton(!showButton)}
                      >
                        Account
                      </span>
                      <FaUser
                        title=" Register or Login"
                        onClick={() => setShowButton(!showButton)}
                        onMouseOver={({ target }) =>
                          (target.style.color = "orange")
                        }
                        onMouseOut={({ target }) =>
                          (target.style.color = "white")
                        }
                      />
                    </div>
                    {showButton && (
                      <div className="account-button mt-4" ref={dropdownRef}>
                        <div className="button-text">
                          <NavLink to="/register" className="acc-button">
                            <button>Register</button>
                          </NavLink>
                          <NavLink to="/login" className="acc-button">
                            <button>Login</button>
                          </NavLink>
                        </div>
                      </div>
                    )}
                  </OutsideClickHandler>
                </li>
              </div>
            )}
          </ul>
        </div>
        {/* sign in and sign up button */}

        {/* <div className="sign-button">
            <button>Sign In</button>
            <span>  </span>
            <button>Sign Up</button>
          </div> */}
        <div
          className="block md:hidden text-white text-xl mx-10"
          onClick={() => setShowMediaIcon(!showMediaIcon)}
        >
          {showMediaIcon ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {showProducts && (
        <div className="newdiv1">
          <Link to="/Rectangle" className="Series-1">
            <img className="Serie-img" src={Rect} alt="Rectangle"></img>
            <h3 className="serie-des">The Rectangle Series</h3>
          </Link>

          <Link to="/Round" className="Series-2">
            <img className="Serie-img" src={Round} alt="Rectangle"></img>
            <h3 className="serie-des">The Round Series</h3>
          </Link>

          <Link to="/Vertical" className="Series-3">
            <img className="Serie-img" src={Vert} alt="Rectangle"></img>
            <h3 className="serie-des">The Vertical Series</h3>
          </Link>

          <Link to="/Bowl" className="Series-4">
            <img className="Serie-img" src={Bowl} alt="Rectangle"></img>
            <h3 className="serie-des">The Bowl Series</h3>
          </Link>

          <Link to="/allProducts" className="Series-5">
            <img className="Serie-img" src={All} alt="Rectangle"></img>
            <h3 className="serie-des">View All Products</h3>
          </Link>

          <Link to="/Customize" className="DIY">
            {/* <img className="Serie-img" src={Rect} alt="Rectangle"></img> */}
            <h3 className="serie-desc">
              Quote
              <br />
              Your Design
            </h3>{" "}
            <FaAngleRight style={{ fontSize: 50, fontWeight: 200 }} />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navigationbar;
