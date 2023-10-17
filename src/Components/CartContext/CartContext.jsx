import { useState, createContext } from "react";

const Context = createContext({});

export const CartContext = ({ children }) => {
  const [items, setItems] = useState([
    { book: { title: "Libro 1" }, quantity: 10 },
  ]);

  const addToCart = (book, quantity) => {
    let exists = false;
    items.forEach((el) => {
      if (el.book.title === book.title) exists = true;
    });
    if (!exists) setItems((prev) => [...prev, { book, quantity }]);
    else {
      setItems((prev) =>
        prev.map((el) =>
          el.book.title === book.title
            ? { book, quantity: el.quantity + quantity }
            : el
        )
      );
    }
  };

  const changeQuantity = (book, quantity) => {
    setItems((prev) =>
      prev.map((el) => (el.book.title === book.title ? { book, quantity } : el))
    );
  };

  const removeFromCart = (book) => {
    setItems((prev) => prev.filter((el) => el.book.title !== book.title));
  };

  return (
    <Context.Provider
      value={{ items, setItems, addToCart, removeFromCart, changeQuantity }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
