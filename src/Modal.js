import React, { useContext } from "react";
import ReactDOM from "react-dom";

import cross from "./cross.png";
import bin from "./bin.png";

import CartContext from "./CartContext";

const Modal = ({ isOpen, setOpen }) => {
  const { cartData, setCartData } = useContext(CartContext);
  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setOpen(false);
    }
  };

  const handleClick = (e) => {
    const id = e.target.closest(".cart-item").id;
    const newCartData = [...cartData];
    const index = newCartData.findIndex((element) => element.idDrink === id);
    if (index !== -1) {
      newCartData.splice(index, 1);
      setCartData(newCartData);
    }
    localStorage.setItem("cartData", JSON.stringify(newCartData));
  };

  const confirmClick = (e) => {
    console.log(JSON.stringify(cartData, null, 2));
    setCartData([]);
    localStorage.setItem("cartData", JSON.stringify([]));
    setOpen(false);
  };

  return ReactDOM.createPortal(
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="modal-title">Your cocktails cart</span>
        <img
          className="modal-img"
          src={cross}
          onClick={() => setOpen(false)}
        ></img>
        <div className="modal-scrollBlock">
          {cartData.length > 0 ? (
            cartData.map((item) => {
              return (
                <div className="cart-item" key={item.idDrink} id={item.idDrink}>
                  <img className="cart-item-img" src={item.strDrinkThumb}></img>
                  <span>{item.strDrink}</span>
                  <img
                    className="cart-item-bin"
                    src={bin}
                    onClick={handleClick}
                  ></img>
                </div>
              );
            })
          ) : (
            <div className="cocktail-ingredientsBlock">The cart is empty</div>
          )}
        </div>
        <div className="modal-button">
          <button onClick={confirmClick}>Confirm</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
};

export default Modal;
