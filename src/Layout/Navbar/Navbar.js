import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav>
      <div className="container">
        <div className="Navbar-Wapper">
          <h3>Store</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="contact">Contact Us</Link>
            </li>
          </ul>
          <Link to="cart" className="Cart">
            <FontAwesomeIcon icon={faCartShopping} bounce />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
