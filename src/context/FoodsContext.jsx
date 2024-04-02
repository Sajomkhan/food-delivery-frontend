import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const FoodsContext = createContext(null);

const FoodsProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
  }

  useEffect(()=>{
  },[cartItems])
  
  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <FoodsContext.Provider value={contextValue}>
      {props.children}
    </FoodsContext.Provider>
  );
};

export default FoodsProvider;
