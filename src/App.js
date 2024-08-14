import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import fetchData from "./fetchData";

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

import FilterContext from "./FilterContext";
import CartContext from "./CartContext";

const App = () => {
  const [filterData, setFilterData] = useState("");
  const [cartData, setCartData] = useState([]);
  return (
    <Router>
      <FilterContext.Provider value={{ filterData, setFilterData }}>
        <CartContext.Provider value={{ cartData, setCartData }}>
          <div className="container">
            <Header></Header>
            <Content></Content>
            <Footer></Footer>
          </div>
        </CartContext.Provider>
      </FilterContext.Provider>
    </Router>
  );
};

export default App;
