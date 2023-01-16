import "../assets/css/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../context/DataContext";

export default function NavBar() {
  const { total } = useContext(dataContext);

  return (
    <div className="nav-container">
      <nav className="navbar">
        <Link className="link navbar-logo" to="/">
          {" "}
          🍕Pizza Mamma Mía🍕
        </Link>{" "}
        <Link className="link seeCarrito" to="/carrito">
          ${total}🛒
        </Link>
      </nav>
    </div>
  );
}
