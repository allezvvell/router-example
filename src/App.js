import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Product from './page/Product';
import ProductDetail from './page/ProductDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Product />} />
        <Route path='/detail' element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
