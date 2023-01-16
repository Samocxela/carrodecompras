
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './views/Home.jsx'
import NavBar from './components/NavBar';
import NotFound from './views/NotFound';
import Detalle from './views/Detalle';
import DataProvider from './context/DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartView from './views/CartView';


function App() {
 
  return (
    <div className="App">
      <DataProvider>
        <BrowserRouter>
          <NavBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/carrito" element={<CartView/>} />
                <Route path="/pizza/:id" element={<Detalle />} />
                <Route path="/notFound" element={<NotFound/>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
        </BrowserRouter>
      </DataProvider>
    </div>
  );
}

export default App;
