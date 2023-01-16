
import { useContext} from "react";
import { dataContext } from "../context/DataContext";
import Button from 'react-bootstrap/Button';
const Detalle = () => {
    const { pizzaSeleccionada,addProduct } = useContext(dataContext);
    
    
    return pizzaSeleccionada.map((pizza,i)=>{
    
      return(
      <div key={i} className="contenedor_horizontal">
        <img src={pizza.img} alt="" />
        <div>
          <h1>{pizza.name.toUpperCase()}</h1>
          <hr></hr>
          <div >
            <p className="texto-right">{pizza.desc}</p>
          </div>
          <div>{pizza.ingredients.map((ingredient,i) =><p key={i}>🍕{ingredient}</p>)}</div>
          <p><span>${pizza.price}</span></p>
          <Button variant="primary" onClick={()=>addProduct(pizza)}>añadir</Button>
        </div>
        
       
      </div>
    )
    })
      
      
  
  }
  export default Detalle
  