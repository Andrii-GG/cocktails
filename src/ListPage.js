import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import fetchData from "./fetchData";

import FilterContext from "./FilterContext";

const ListPage = () => {
  const { filterData, setFilterData } = useContext(FilterContext);
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (filterData !== "")
      fetchData(
        `search.php?${
          filterData.length === 1 ? `f=${filterData}` : `s=${filterData}`
        }`,
        setData
      );
  }, [filterData]);

  return (
    <div className="ListPage">
      {filterData && data && data.drinks && data.drinks.length > 0 ? (
        data.drinks.map((item) => {
          return (
            <div
              className="cocktailCard"
              id={item.idDrink}
              key={item.idDrink}
              style={{ backgroundImage: `url(${item.strDrinkThumb})` }}
              onClick={() => {
                navigate(`/CocktailPage/${item.idDrink}`);
              }}
            >
              <div className="cocktailCard-Img"></div>
              <div className="cocktailCard-Label">{item.strDrink}</div>
              <div className="cocktailCard-Caption">
                {item.strAlcoholic} {item.strCategory}
              </div>
            </div>
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default ListPage;
