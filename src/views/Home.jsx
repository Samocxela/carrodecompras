import "../assets/css/home.css";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Pizzas from "../components/Pizzas";
export default function Home() {
  return (
    <div>
      <Banner />
      <div className="pizza-card-container">
        <Pizzas />
      </div>
      <Footer />
    </div>
  );
}
