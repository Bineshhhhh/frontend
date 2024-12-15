import React, { useState } from 'react';
import './Navbar.css';
import logo from '../assets/ME.png';
import cart_icon from '../assets/cart_icon.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Logo" />
          <p>BINESH</p>
        </div>
        <ul className="nav-menu">
          <li onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>
            Shop {menu === "shop" && <hr />}
          </li>
          <li onClick={() => setMenu("mens")} className={menu === "mens" ? "active" : ""}>
            Men {menu === "mens" && <hr />}
          </li>
          <li onClick={() => setMenu("womens")} className={menu === "womens" ? "active" : ""}>
            Women {menu === "womens" && <hr />}
          </li>
          <li onClick={() => setMenu("kids")} className={menu === "kids" ? "active" : ""}>
            Kids {menu === "kids" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          <button>Login</button>
          <img src={cart_icon} alt="Cart Icon" />
          <div className="nav-cart-count">10</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
