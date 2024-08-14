import React, { useEffect, useState, useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import FilterContext from "./FilterContext";

const Footer = () => {
  const { filterData, setFilterData } = useContext(FilterContext);
  const navigate = useNavigate();

  const alphabetUppercase = [];
  for (let i = 0; i < 26; i++) {
    alphabetUppercase.push(String.fromCharCode(65 + i));
  }

  const handleClick = useCallback(
    (item) => {
      setFilterData(item);
      navigate("/ListPage");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    [navigate, setFilterData]
  );

  return (
    <div className="footer">
      {alphabetUppercase.map((item) => {
        return (
          <div key={item} onClick={() => handleClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default Footer;
