import { useContext } from "react";
import { dataContext } from "../context/DataContext";

import React from "react";

const CantidadPizza = ({ pizza }) => {
  const { cart, setCart, cantidad, setCantidad, addProduct } =
    useContext(dataContext);
  const disminuir = () => {
    const nuevaCantPizza = [pizza];
    nuevaCantPizza.map((ele) => {
      ele.cantidad !== 1 && setCantidad((ele.cantidad -= 1));
      return setCart(cart, { ...pizza, cantidad: cantidad });
    });
  };
  return (
    <div key={pizza.id}>
      <p className="counter-button" onClick={() => addProduct(pizza)}>
        +
      </p>
      <span className="counter-value">{pizza.cantidad}</span>
      <p className="counter-button" onClick={disminuir}>
        -
      </p>
    </div>
  );
};

export default CantidadPizza;
