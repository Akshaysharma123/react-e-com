import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./layout.css";
import {CartContext} from '../Global/CartContext'

const Header = () => {
  const {qty} = useContext(CartContext)

  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
            <ShoppingCartIcon className="shoppingcart" /> ADD TO CART <span className="cartCount">{qty}</span>
        </Link>
      </nav>
    </>
  );
};

export default Header;
