import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "../assets/css/cart.css";
import CantidadPizza from "./CantidadPizza";

const Cart = () => {
  const { cart, setCart, setCantidad } = useContext(dataContext);

  const eliminarPizza = (id) => {
    const foundId = cart.find((ele) => ele.id === id);

    const newCart = cart.filter((ele) => {
      setCantidad((foundId.cantidad = 1));
      return ele !== foundId;
    });
    setCart(newCart);
  };

  return cart.map((pizza, i) => {
    return (
      <div key={i}>
        <div className="cartContent">
          <img className="pequeña" src={pizza.img} alt="i-pizza" />
          <p>{pizza.name.toUpperCase()}</p>
          <CantidadPizza pizza={pizza} />
          <p>${pizza.price * pizza.cantidad}</p>
          <h3
            className="boton-eliminar"
            onClick={() => eliminarPizza(pizza.id)}
          >
            ❌
          </h3>
        </div>
      </div>
    );
  });
};

export default Cart;
