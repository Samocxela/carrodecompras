import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const Total = () => {
  const { cart } = useContext(dataContext);
  const total = cart.reduce((acc, elemento) => acc + elemento.price * elemento.cantidad, 0);
  console.log(total);
  return (
    <div>
      <h3>Total a pagar: ${total}</h3>
    </div>
  );
};

export default Total;
