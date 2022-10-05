import React, { useState, useEffect, useContext, createContext } from "react";
import { toast } from "react-hot-toast";
const Context = createContext();
const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);
  return (
    <Context.Provider
      value={{ showCart, cartItems, totalPrice, totalQuantities, qty }}
    >
      {children}
    </Context.Provider>
  );
};

export default StateContext;
