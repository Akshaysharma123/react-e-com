import React from "react";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import Details from "../components/Details";
import Cart from "../components/Cart";
import Default from "../components/Default";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";



const NavBar = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Product} />
          <Route path="/productlist" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route component={Default} />
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
