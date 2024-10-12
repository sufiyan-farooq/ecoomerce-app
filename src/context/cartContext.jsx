import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    const arr = cartItems;
    const findIndex = cartItems.findIndex((data) => data.id === item.id);

    if (findIndex === -1) {
      arr.push(item);
    } else {
      arr[findIndex].quantity++;
    }
    setCartItems([...arr]);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        setCartItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
