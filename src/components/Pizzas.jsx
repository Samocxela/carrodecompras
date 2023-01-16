import { useContext } from "react";
import { dataContext } from "../context/DataContext";
import "../assets/css/card.css";
import "../assets/css/pizzas.css";
import { useNavigate } from "react-router-dom";

const Pizzas = () => {
  const { data, setPizzaSelecionada, addProduct } = useContext(dataContext);
  const navigate = useNavigate();

  const verMas = (pizzaSeleccionada) => {
    setPizzaSelecionada([pizzaSeleccionada]);
    navigate(`/pizza/${pizzaSeleccionada.id}`);
  };

  return data.map((pizza, i) => {
    return (
      <div className="card" key={i}>
        <img src={pizza.img} alt=""></img>
        <h3>{pizza.name.toUpperCase()}</h3>
        <h4>${pizza.price}</h4>
        <h6>
          {pizza.ingredients.map((ingredient, i) => (
            <p key={i}>🍕{ingredient}</p>
          ))}
        </h6>
        <button onClick={() => addProduct(pizza)}>Añadir</button>
        <button onClick={() => verMas(pizza)}>Ver Más</button>
      </div>
    );
  });
};

export default Pizzas;
