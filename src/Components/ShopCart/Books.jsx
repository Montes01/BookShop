import React from "react";
import Context from "../CartContext/CartContext";
import { useContext } from "react";
export const Books = () => {
  const { items, changeQuantity } = useContext(Context);

  return (
    <>
      {items.map((item) => (
        <div className="flex items-center gap-6">
          <section className="w-96 h-40 relative grid place-content-center">
            <img
              src={item.book.image}
              className="w-full brightness-50 h-full object-cover absolute"
            />
            <strong className="z-10 text-2xl">{item.book.title}</strong>
          </section>
          <section>
            <input
              onChange={(e) => changeQuantity(item, e.target.value)}
              type="number"
              className="w-12 h-12 text-center  text-black"
              defaultValue={item.quantity}
            />
          </section>
        </div>
      ))}
    </>
  );
};
