import { createContext, useState, useEffect } from "react";

export const dataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [pizzaSeleccionada, setPizzaSelecionada] = useState([]);
  const [cantidad, setCantidad] = useState(1);

  const getPizzas = async () => {
    const resp = await fetch("/pizzas.json");
    let data = await resp.json();

    data = data.map((elePizza) => ({
      desc: elePizza.desc,
      id: elePizza.id,
      img: elePizza.img,
      ingredients: elePizza.ingredients,
      name: elePizza.name,
      price: elePizza.price,
      cantidad: 1,
    }));

    console.log(data);
    setData(data);
  };

  const addProduct = (pizza) => {
    const repeat = cart.some((ele) => ele.id === pizza.id);
    if (repeat) {
      const nuevaCantPizza = [pizza];
      nuevaCantPizza.map((ele) => {
        setCantidad((ele.cantidad += 1));
        return setCart(cart, { ...pizza, cantidad: cantidad });
      });
    } else {
      setCart([...cart, pizza]);
      console.log(pizza);
    }
  };

  const total = cart.reduce(
    (acc, elemento) => acc + elemento.price * elemento.cantidad,
    0
  );

  useEffect(() => {
    getPizzas();
  }, []);

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        cart,
        setCart,
        pizzaSeleccionada,
        setPizzaSelecionada,
        addProduct,
        total,
        cantidad,
        setCantidad,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
