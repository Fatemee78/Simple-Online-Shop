import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Shop from './pages/shop/shop.jsx'
import Cart from './cart/cart';
import Nav from './components/nav';
import { ShopContextProvider } from './context/shopContext';

function App() {
  return (
    <div className="App">

      {/* context is accessable for all project */}
      <ShopContextProvider>
        <Router>
        {/* navbar componrnt */}
          <Nav/>
          {/* define routes */}
          <Routes>
            <Route path='/' element={<Shop/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>

        {/* footer */}
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
