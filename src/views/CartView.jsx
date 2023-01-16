import Cart from "../components/Cart";
import Total from "../components/Total";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";

const CartView = () => {
    const {cart} = useContext(dataContext);
    return cart.length > 0?(
        <div>
            <Cart />
            <Total />
        </div>
        ): <h2 className="mensaje-vacio">No ha agregado ninguna🍕a su carrito</h2>
   
};

export default CartView;
